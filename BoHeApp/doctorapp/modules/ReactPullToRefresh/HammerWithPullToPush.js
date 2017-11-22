import React, { PropTypes, Component } from 'react';
import Hammer from 'react-hammerjs'
import ReactDOM from 'react-dom'

export default class ReactHammer extends Component {
	constructor(props) {
		// code
	  super(props);
      this.options = {};
      this.handleRefresh = this.handleRefresh.bind(this);
      this._doReset = this._doReset.bind(this);
      this._doLoading = this._doLoading.bind(this);
      this.state = {
         initialized: false
      };
      this.pan =  {
		enabled: false,
		distance: 0,
		startingPositionY: 0
	 };
	}

	handleRefresh() {
      return new Promise((resolve, reject) => {
        this.props.onRefresh(resolve, reject);
      });
    }


	/**
	 * Determine whether pan events should apply based on scroll position on panstart
	 *
	 * @param {object} e - Event object
	 */
	_panStart(e) {
		this.pan.startingPositionY = this.options.bodyEl.scrollTop;

		if ( this.pan.startingPositionY === 0 ) {
			console.log("_panStart true")
			this.pan.enabled = true;
		}
	};

	/**
	 * Handle element on screen movement when the pandown events is firing.
	 *
	 * @param {object} e - Event object
	 */
	_panDown(e) {
		if ( ! this.pan.enabled ) {
			console.log("_panUp true down")
			return;
		}
        console.log("_panDown true")
		//e.preventDefault();///////////////////
		this.pan.distance = e.distance / this.options.resistance;
        console.log(this.pan.distance)
		this._setContentPan();
		this._setBodyClass();
	}

	/**
	 * Handle element on screen movement when the pandown events is firing.
	 *
	 * @param {object} e - Event object
	 */
	 _panUp(e) {
		if ( ! this.pan.enabled || this.pan.distance === 0 ) {
			console.log("_panUp true false")
			console.log(this.pan.distance)
			return;
		}
        console.log("_panUp true")
		//e.preventDefault();/////////////////

		if ( this.pan.distance < e.distance / this.options.resistance ) {
			this.pan.distance = 0;
		} else {
			this.pan.distance = e.distance / this.options.resistance;
		}

		this._setContentPan();
		this._setBodyClass();
	};

	/**
	 * Set the CSS transform on the content element to move it on the screen.
	 */
     _setContentPan() {
		// Use transforms to smoothly animate elements on desktop and mobile devices
		this.options.contentEl.style.transform = this.options.contentEl.style.webkitTransform = 'translate3d( 0, ' + this.pan.distance + 'px, 0 )';
		this.options.ptrEl.style.transform = this.options.ptrEl.style.webkitTransform = 'translate3d( 0, ' + ( this.pan.distance - this.options.ptrEl.offsetHeight ) + 'px, 0 )';
	};

	/**
	 * Set/remove the loading body class to show or hide the loading indicator after pull down.
	 */
	 _setBodyClass() {
		if ( this.pan.distance > this.options.distanceToRefresh ) {
			this.bodyClass.add( 'ptr-refresh' );
		} else {
			this.bodyClass.remove( 'ptr-refresh' );
		}
	};

	/**
	 * Determine how to animate and position elements when the panend event fires.
	 *
	 * @param {object} e - Event object
	 */
	_panEnd(e) {
		if ( ! this.pan.enabled ) {
			return;
		}
        console.log("_panEnd true")
		//e.preventDefault();////////

		this.options.contentEl.style.transform = this.options.contentEl.style.webkitTransform = '';
		this.options.ptrEl.style.transform = this.options.ptrEl.style.webkitTransform = '';

		if ( this.options.bodyEl.classList.contains( 'ptr-refresh' ) ) {
			this._doLoading();
		} else {
			this._doReset();
		}

		this.pan.distance = 0;
		this.pan.enabled = false;
	};

	/**
	 * Position content and refresh elements to show that loading is taking place.
	 */
	_doLoading() {
		this.bodyClass.add( 'ptr-loading' );
        var that = this;
		// If no valid loading function exists, just reset elements
		if ( ! this.options.loadingFunction ) {
			return this._doReset();
		}

		// The loading function should return a promise
		var loadingPromise = this.options.loadingFunction();

		// For UX continuity, make sure we show loading for at least one second before resetting
		setTimeout( function() {
			// Once actual loading is complete, reset pull to refresh
			loadingPromise.then( that._doReset );
		}, 1000 );
	};

	/**
	 * Reset all elements to their starting positions before any paning took place.
	 */
	_doReset() {
		this.bodyClass.remove( 'ptr-loading' );
		this.bodyClass.remove( 'ptr-refresh' );
		this.bodyClass.add( 'ptr-reset' );

		var bodyClassRemove = (function() {
			this.bodyClass.remove( 'ptr-reset' );
			this.options.bodyEl.removeEventListener( 'transitionend', bodyClassRemove, false );
		}).bind(this);
		this.options.bodyEl.addEventListener( 'transitionend', bodyClassRemove, false );
	};

	// methods

    handlePan(ev) {
    	console.log("sssss")
        console.log(ev.direction)
        console.log("sssss")
        if (ev.direction == 8) {
            this._panUp(ev)
        } else if (ev.direction == 16) {
        	this._panDown(ev)
        }
        if (this.props.onPan)
            this.props.onPan(ev);
    }

    config(){

            this.options = {
               contentEl: ReactDOM.findDOMNode(this.refs.refresh),
               ptrEl: ReactDOM.findDOMNode(this.refs.ptr),
               bodyEl: ReactDOM.findDOMNode(this.refs.body),
               distanceToRefresh: 70,
               loadingFunction: this.handleRefresh,
               resistance: 2.5
            };

            if (!this.options.contentEl || !this.options.ptrEl) {
                return false;
            }

            this.bodyClass = this.options.bodyEl.classList;
    }

    componentDidMount() {
        if (!this.props.disabled) {
        	this.config();
        }
    }


    componentDidUpdate() {
      if (!this.props.disabled) {
        this.config();
      }
    }

	render() {
       const {
        children,
        disabled,
        distanceToRefresh,
        hammerOptions,
        icon,
        loading,
        onRefresh,
        resistance,
        onPan,
        height,
        ...rest
       } = this.props;

       if (disabled) {
         return (
           <div {...rest}>
            {children}
           </div>
         );
       }
	   var options = {
	        touchAction: 'pan-y'
	   };
	   return (
                <div id='pullhammer' ref="body" {...rest} style={{overflow:'auto',maxHeight:height}}>
                   <div ref="ptr" className="ptr-element">
                     {icon || <span className="genericon genericon-next"></span>}
                     {loading ||
                       <div className="loading">
                         <span className="loading-ptr-1"></span>
                         <span className="loading-ptr-2"></span>
                         <span className="loading-ptr-3"></span>
                       </div>}
                  </div>
                  <Hammer direction={'DIRECTION_VERTICAL'} options={ options }  onPan={ ::this.handlePan } onPanStart={ ::this._panStart } onPanEnd={::this._panEnd}>
                   <div ref="refresh" className="refresh-view">
                     {children}
                   </div>
	              </Hammer>
               </div>)

	}
}