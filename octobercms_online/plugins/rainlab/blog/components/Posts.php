<?php


namespace RainLab\Blog\Components;

use Redirect;
use Cms\Classes\Page;
use Cms\Classes\ComponentBase;
use RainLab\Blog\Models\Post as BlogPost;
use RainLab\Blog\Models\Category as BlogCategory;
use PolloZen\MostVisited\Models\Visits as MostPost;
use Log;
use Illuminate\Support\Facades\Input;
use Session;

class Posts extends ComponentBase {
	public $theservicecategorylist;
	public $thevikicategorylist;
	public $thecasecategorylist;
	public $thethree;
	/**
	 * A collection of posts to display
	 * 
	 * @var Collection
	 */
	public $posts;
	public $test;
	/**
	 * Parameter to use for the page number
	 * 
	 * @var string
	 */
	public $pageParam;
	/**
	 * If the post list should be filtered by a category, the model to use.
	 * 
	 * @var Model
	 */
	public $category;
	/**
	 * Message to display when there are no messages.
	 * 
	 * @var string
	 */
	public $noPostsMessage;
	/**
	 * Reference to the page name for linking to posts.
	 * 
	 * @var string
	 */
	public $postPage;
	/**
	 * Reference to the page name for linking to categories.
	 * 
	 * @var string
	 */
	public $categoryPage;
	/**
	 * If the post list should be ordered by another attribute.
	 * 
	 * @var string
	 */
	public $sortOrder;
	public function componentDetails() {
		return [ 
				'name' => 'rainlab.blog::lang.settings.posts_title',
				'description' => 'rainlab.blog::lang.settings.posts_description' 
		];
	}
	public function defineProperties() {
		return [ 
				'pageNumber' => [ 
						'title' => 'rainlab.blog::lang.settings.posts_pagination',
						'description' => 'rainlab.blog::lang.settings.posts_pagination_description',
						'type' => 'string',
						'default' => '{{ :page }}' 
				],
				'categoryFilter' => [ 
						'title' => 'rainlab.blog::lang.settings.posts_filter',
						'description' => 'rainlab.blog::lang.settings.posts_filter_description',
						'type' => 'string',
						'default' => '' 
				],
				'postsPerPage' => [ 
						'title' => 'rainlab.blog::lang.settings.posts_per_page',
						'type' => 'string',
						'validationPattern' => '^[0-9]+$',
						'validationMessage' => 'rainlab.blog::lang.settings.posts_per_page_validation',
						'default' => '10' 
				],
				'noPostsMessage' => [ 
						'title' => 'rainlab.blog::lang.settings.posts_no_posts',
						'description' => 'rainlab.blog::lang.settings.posts_no_posts_description',
						'type' => 'string',
						'default' => 'No posts found',
						'showExternalParam' => false 
				],
				'sortOrder' => [ 
						'title' => 'rainlab.blog::lang.settings.posts_order',
						'description' => 'rainlab.blog::lang.settings.posts_order_description',
						'type' => 'dropdown',
						'default' => 'published_at desc' 
				],
				'categoryPage' => [ 
						'title' => 'rainlab.blog::lang.settings.posts_category',
						'description' => 'rainlab.blog::lang.settings.posts_category_description',
						'type' => 'dropdown',
						'default' => 'blog/category',
						'group' => 'Links' 
				],
				'postPage' => [ 
						'title' => 'rainlab.blog::lang.settings.posts_post',
						'description' => 'rainlab.blog::lang.settings.posts_post_description',
						'type' => 'dropdown',
						'default' => 'blog/post',
						'group' => 'Links' 
				],
				'exceptPost' => [ 
						'title' => 'rainlab.blog::lang.settings.posts_except_post',
						'description' => 'rainlab.blog::lang.settings.posts_except_post_description',
						'type' => 'string',
						'validationPattern' => 'string',
						'validationMessage' => 'rainlab.blog::lang.settings.posts_except_post_validation',
						'default' => '',
						'group' => 'Exceptions' 
				],
				'type' => [ 
						'description' => 'type of blog',
						'title' => 'title',
						'default' => 10,
						'type' => 'string',
						'validationPattern' => '^[0-9]+$',
						'validationMessage' => 'The Max Items value is required and should be integer.' 
				] 
		];
	}
	public function getCategoryPageOptions() {
		return Page::sortBy ( 'baseFileName' )->lists ( 'baseFileName', 'baseFileName' );
	}
	public function getPostPageOptions() {
		return Page::sortBy ( 'baseFileName' )->lists ( 'baseFileName', 'baseFileName' );
	}
	public function getSortOrderOptions() {
		return BlogPost::$allowedSortingOptions;
	}
	/*
	 * 分页的数据
	 */
	public function onGetnext() {
		$type = Input::get ( 'type' );
		$typeName = Input::get ( 'typeName' );
		$page = Input::get ( 'page' );
		$category = Input::get ( 'cat' );
		if ($type == 1) {
			$posts = BlogPost::where ( 'type', 1 )->listFrontEnd ( [ 
					'page' => $page,
					'sort' => $this->property ( 'sortOrder' ),
					'perPage' => $this->property ( 'postsPerPage' ),
					'search' => trim ( input ( 'search' ) ),
					'category' => $category,
					'exceptPost' => $this->property ( 'exceptPost' ) 
			] );
		} elseif ($type == 2) {
			// var_dump($category);die;
			$posts = BlogPost::where ( 'type', 2 )->listFrontEnd ( [ 
					'page' => $page,
					'sort' => $this->property ( 'sortOrder' ),
					'perPage' => $this->property ( 'postsPerPage' ),
					'search' => trim ( input ( 'search' ) ),
					'category' => $category,
					'exceptPost' => $this->property ( 'exceptPost' ) 
			] );
		} elseif ($type == 3) {
			$posts = BlogPost::where ( 'type', 3 )->listFrontEnd ( [ 
					'page' => $this->property ( 'pageNumber' ),
					'sort' => $this->property ( 'sortOrder' ),
					'perPage' => $this->property ( 'postsPerPage' ),
					'search' => trim ( input ( 'search' ) ),
					'category' => $category,
					'exceptPost' => $this->property ( 'exceptPost' ) 
			] );
		}
		/*
		 * Add a "url" helper attribute for linking to each post and category
		 */
		$posts->each ( function ($post) {
			$post->setUrl ( $this->postPage, $this->controller );
			$views = MostPost::where ( 'post_id', $post->id )->first ();
			if ($views) {
				$post->visits = $views->visits;
			} else {
				$post->visits = 0;
			}
			$post->categories->each ( function ($category) {
				$category->setUrl ( $this->categoryPage, $this->controller );
			} );
		} );
		$this->posts = $this->page ['typeName'] = $typeName;
		$this->posts = $this->page ['posts'] = $posts;
		$this->category = $this->page ['category'] = $category;
	}
	public function onRun() {
		$category = $this->param ( 'category' ) ? $this->param ( 'category' ) : null;
		if ($category > 1) {
			$thecategory = $category;
		} else {
			$thecategory = $this->loadnowCategory ();
		}
		$this->prepareVars ();
		$this->category = $this->page ['category'] = $thecategory;
		$this->posts = $this->page ['posts'] = $this->listPosts ();
		$this->theservicecategorylist = $this->page ['theservicecategorylist'] = $this->getservicecategorylist ();
		$this->thevikiecategorylist = $this->page ['thevikicategorylist'] = $this->getvikicategorylist ();
		$this->thecasecategorylist = $this->page ['thecasecategorylist'] = $this->getcasecategorylist ();
		$this->thethree = $this->page ['thethree'] = $this->gettopthreelist ();
		/*
		 * If the page number is not valid, redirect
		 */
		if ($pageNumberParam = $this->paramName ( 'pageNumber' )) {
			$currentPage = $this->property ( 'pageNumber' );
			if ($currentPage > ($lastPage = $this->posts->lastPage ()) && $currentPage > 1)
				return Redirect::to ( $this->currentPageUrl ( [ 
						$pageNumberParam => $lastPage 
				] ) );
		}
	}
	protected function prepareVars() {
		$this->pageParam = $this->page ['pageParam'] = $this->paramName ( 'pageNumber' );
		$this->noPostsMessage = $this->page ['noPostsMessage'] = $this->property ( 'noPostsMessage' );
		/*
		 * Page links
		 */
		$this->postPage = $this->page ['postPage'] = $this->property ( 'postPage' );
		$this->categoryPage = $this->page ['categoryPage'] = $this->property ( 'categoryPage' );
	}
	protected function listPosts() {
		// $category = $this->category ? $this->category->id : null;
		$category = $this->param ( 'category' ) ? $this->param ( 'category' ) : null;
		$type = $this->property ( 'type' );
		/*
		 * List all the posts, eager load their categories
		 */
		//设置三项
		if($category > 0){
			$sanxiang=BlogCategory::where ( 'id', $category)->first ();
			if($sanxiang){
				$this->page['title']=$sanxiang->title;
				$this->page['description']=$sanxiang->description;
				$this->page['keywords']=$sanxiang->slug;
			}
			
		}else{
			if($type == 1){
				$sanxiang=BlogCategory::where ( 'name', '服务')->first ();
				if($sanxiang){
					$this->page['title']=$sanxiang->title;
					$this->page['description']=$sanxiang->description;
					$this->page['keywords']=$sanxiang->slug;
				}
			}
			if($type == 2){
				$sanxiang=BlogCategory::where ( 'name', '百科')->first ();
				if($sanxiang){
					$this->page['title']=$sanxiang->title;
					$this->page['description']=$sanxiang->description;
					$this->page['keywords']=$sanxiang->slug;
				}
			}
			if($type == 3){
				$sanxiang=BlogCategory::where ( 'name', '病例')->first ();
				if($sanxiang){
					$this->page['title']=$sanxiang->title;
					$this->page['description']=$sanxiang->description;
					$this->page['keywords']=$sanxiang->slug;
				}
			}
		}
		if ($category > 0) {
			if ($type == 1) {
				$posts = BlogPost::where ( 'type', 1 )->listFrontEnd ( [ 
						'page' => $this->property ( 'pageNumber' ),
						'sort' => $this->property ( 'sortOrder' ),
						'perPage' => $this->property ( 'postsPerPage' ),
						'search' => trim ( input ( 'search' ) ),
						'category' => $category,
						'exceptPost' => $this->property ( 'exceptPost' ) 
				] );
			} elseif ($type == 2) {
				$posts = BlogPost::where ( 'type', 2 )->listFrontEnd ( [ 
						'page' => $this->property ( 'pageNumber' ),
						'sort' => $this->property ( 'sortOrder' ),
						'perPage' => $this->property ( 'postsPerPage' ),
						'search' => trim ( input ( 'search' ) ),
						'category' => $category,
						'exceptPost' => $this->property ( 'exceptPost' ) 
				] );
			} elseif ($type == 3) {
				$posts = BlogPost::where ( 'type', 3 )->listFrontEnd ( [ 
						'page' => $this->property ( 'pageNumber' ),
						'sort' => $this->property ( 'sortOrder' ),
						'perPage' => $this->property ( 'postsPerPage' ),
						'search' => trim ( input ( 'search' ) ),
						'category' => $category,
						'exceptPost' => $this->property ( 'exceptPost' ) 
				] );
			}
			/*
			 * Add a "url" helper attribute for linking to each post and category
			 */
			$posts->each ( function ($post) {
				$post->setUrl ( $this->postPage, $this->controller );
				$views = MostPost::where ( 'post_id', $post->id )->first ();
				if ($views) {
					$post->visits = $views->visits;
				} else {
					$post->visits = 0;
				}
				$post->categories->each ( function ($category) {
					$category->setUrl ( $this->categoryPage, $this->controller );
				} );
			} );
		} else {
			if ($type == 1) {
				// 查找标签ID
				$thecategory = BlogCategory::where ( 'name', '服务' )->first ();
				if ($thecategory) {
					$thecategorylist = BlogCategory::where ( 'parent_id', $thecategory->id )->orderBy ( 'id', 'asc' )->first ();
					if ($thecategorylist) {
						$category = $thecategorylist->id;
					}
					if (! $thecategorylist) {
						if ($thecategory) {
							$category = $thecategory->id;
						} else {
							$category = null;
						}
					}
				} else {
					$category = null;
				}
				
				$posts = BlogPost::where ( 'type', 1 )->listFrontEnd ( [ 
						'page' => $this->property ( 'pageNumber' ),
						'sort' => $this->property ( 'sortOrder' ),
						'perPage' => $this->property ( 'postsPerPage' ),
						'search' => trim ( input ( 'search' ) ),
						'category' => $category,
						'exceptPost' => $this->property ( 'exceptPost' ) 
				] );
			} elseif ($type == 2) {
				// 查找标签ID
				$thecategory = BlogCategory::where ( 'name', '百科' )->first ();
				if ($thecategory) {
					$thecategorylist = BlogCategory::where ( 'parent_id', $thecategory->id )->orderBy ( 'id', 'asc' )->first ();
					if ($thecategorylist) {
						$category = $thecategorylist->id;
					}
					if (! $thecategorylist) {
						if ($thecategory) {
							$category = $thecategory->id;
						} else {
							$category = null;
						}
					}
				} else {
					$category = null;
				}
				
				$posts = BlogPost::where ( 'type', 2 )->listFrontEnd ( [ 
						'page' => $this->property ( 'pageNumber' ),
						'sort' => $this->property ( 'sortOrder' ),
						'perPage' => $this->property ( 'postsPerPage' ),
						'search' => trim ( input ( 'search' ) ),
						'category' => $category,
						'exceptPost' => $this->property ( 'exceptPost' ) 
				] );
			} elseif ($type == 3) {
				// 查找标签ID
				$thecategory = BlogCategory::where ( 'name', '病例' )->first ();
				if ($thecategory) {
					$thecategorylist = BlogCategory::where ( 'parent_id', $thecategory->id )->orderBy ( 'id', 'asc' )->first ();
					if ($thecategorylist) {
						$category = $thecategorylist->id;
					}
					if (! $thecategorylist) {
						if ($thecategory) {
							$category = $thecategory->id;
						} else {
							$category = null;
						}
					}
				} else {
					$category = null;
				}
				
				$posts = BlogPost::where ( 'type', 3 )->listFrontEnd ( [ 
						'page' => $this->property ( 'pageNumber' ),
						'sort' => $this->property ( 'sortOrder' ),
						'perPage' => $this->property ( 'postsPerPage' ),
						'search' => trim ( input ( 'search' ) ),
						'category' => $category,
						'exceptPost' => $this->property ( 'exceptPost' ) 
				] );
			}
			/*
			 * Add a "url" helper attribute for linking to each post and category
			 */
			$posts->each ( function ($post) {
				$post->setUrl ( $this->postPage, $this->controller );
				$views = MostPost::where ( 'post_id', $post->id )->first ();
				if ($views) {
					$post->visits = $views->visits;
				} else {
					$post->visits = 0;
				}
				$post->categories->each ( function ($category) {
					$category->setUrl ( $this->categoryPage, $this->controller );
				} );
			} );
		}
		return $posts;
	}
	protected function getservicecategorylist() {
		$thecategory = BlogCategory::where ( 'name', '服务' )->first ();
		if ($thecategory) {
			$thecategorylist = BlogCategory::where ( 'parent_id', $thecategory->id )->get ();
			if ($thecategory && $thecategorylist) {
				return $thecategorylist;
			} else {
				$thecategorylist = null;
				return $thecategorylist;
			}
		} else {
			$thecategorylist = null;
			return $thecategorylist;
		}
	}
	protected function getvikicategorylist() {
		$thecategory = BlogCategory::where ( 'name', '百科' )->first ();
		if ($thecategory) {
			$thecategorylist = BlogCategory::where ( 'parent_id', $thecategory->id )->get ();
			if ($thecategory && $thecategorylist) {
				return $thecategorylist;
			} else {
				$thecategorylist = null;
				return $thecategorylist;
			}
		} else {
			$thecategorylist = null;
			return $thecategorylist;
		}
	}
	protected function getcasecategorylist() {
		$thecategory = BlogCategory::where ( 'name', '病例' )->first ();
		if ($thecategory) {
			$thecategorylist = BlogCategory::where ( 'parent_id', $thecategory->id )->get ();
			if ($thecategory && $thecategorylist) {
				return $thecategorylist;
			} else {
				$thecategorylist = null;
				return $thecategorylist;
			}
		} else {
			$thecategorylist = null;
			return $thecategorylist;
		}
	}
	protected function gettopthreelist() {
		$thecat = BlogCategory::where ( 'name', '首页' )->first ();
		if ($thecat) {
			$catid = $thecat->id;
			$thethree = BlogPost::listFrontEnd ( [ 
					'page' => $this->property ( 'pageNumber' ),
					'sort' => $this->property ( 'sortOrder' ),
					'perPage' => $this->property ( 'postsPerPage' ),
					'search' => trim ( input ( 'search' ) ),
					'category' => $catid,
					'exceptPost' => $this->property ( 'exceptPost' ) 
			] );
			if ($thethree) {
				return $thethree;
			} else {
				$thethree = null;
				return $thethree;
			}
		} else {
			$thethree = null;
			return $thethree;
		}
	}
	protected function loadCategory() {
		if (! $slug = $this->property ( 'categoryFilter' )) {
			return null;
		}
		$category = new BlogCategory ();
		$category = $category->isClassExtendedWith ( 'RainLab.Translate.Behaviors.TranslatableModel' ) ? $category->transWhere ( 'slug', $slug ) : $category->where ( 'slug', $slug );
		$category = $category->first ();
		return $category ?: null;
	}
	protected function loadnowCategory() {
		// 查找标签ID
		$type = $this->property ( 'type' );
		if ($type == 1) {
			$thecategory = BlogCategory::where ( 'name', '服务' )->first ();
			if ($thecategory) {
				$thecategorylist = BlogCategory::where ( 'parent_id', $thecategory->id )->orderBy ( 'id', 'asc' )->first ();
				if ($thecategorylist) {
					$category = $thecategorylist->id;
				}
				if (! $thecategorylist) {
					if ($thecategory) {
						$category = $thecategory->id;
					} else {
						$category = null;
					}
				}
			} else {
				$category = null;
			}
		}
		if ($type == 2) {
			$thecategory = BlogCategory::where ( 'name', '百科' )->first ();
			if ($thecategory) {
				$thecategorylist = BlogCategory::where ( 'parent_id', $thecategory->id )->orderBy ( 'id', 'asc' )->first ();
				if ($thecategorylist) {
					$category = $thecategorylist->id;
				}
				if (! $thecategorylist) {
					if ($thecategory) {
						$category = $thecategory->id;
					} else {
						$category = null;
					}
				}
			} else {
				$category = null;
			}
		}
		if ($type == 3) {
			$thecategory = BlogCategory::where ( 'name', '病例' )->first ();
			if ($thecategory) {
				$thecategorylist = BlogCategory::where ( 'parent_id', $thecategory->id )->orderBy ( 'id', 'asc' )->first ();
				if ($thecategorylist) {
					$category = $thecategorylist->id;
				}
				if (! $thecategorylist) {
					if ($thecategory) {
						$category = $thecategory->id;
					} else {
						$category = null;
					}
				}
			} else {
				$category = null;
			}
		}
		return $category ?: null;
	}
}
