<?php namespace Bohe\Seothing\Models;

use Backend\Models\ExportModel;
use ApplicationException;
use Log;

/**
 * Post Export Model
 */
class PostExport extends ExportModel
{
    public $table = 'bohe_search_article';

    /**
     * @var array Relations
     */
    public $belongsTo = [
        'post_user' => [
            'Backend\Models\User',
            'key' => 'user_id'
        ]
    ];

  

    /**
     * The accessors to append to the model's array form.
     * @var array
     */
    protected $appends = [
        'author_email',
    ];

    public function exportData($columns, $sessionKey = null)
    {
        $result = self::make()
            ->with([
                'post_user',
            ])
            ->get()
            ->toArray()
        ;
            
        return $result;
    }

    public function getAuthorEmailAttribute()
    {
        if (!$this->post_user) {
            return '';
        }

        return $this->post_user->email;
    }

   
}
