export function isElementVisible(el) {
        if((typeof window !=="undefined") && (typeof el !== "undefined") && (el !== null) )
        {
          var rect = el.getBoundingClientRect(),
            vWidth = window.innerWidth || document.documentElement.clientWidth,
            vHeight = window.innerHeight || document.documentElement.clientHeight,
            efp = function(x, y) {
                return document.elementFromPoint(x, y) };
          // Return false if it's not in the viewport
          if (rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight)
            return false;
          // Return true if any of its four corners are visible
          return (
            el.contains(efp(rect.left, rect.top)) || el.contains(efp(rect.right, rect.top)) || el.contains(efp(rect.right, rect.bottom)) || el.contains(efp(rect.left, rect.bottom))
          );
        }else
          return false;
}


  //  const domain='test.zhenweitech.cn';

   const domain='localhost:3000';
// const domain='wxif.boheyayi.com';



export function getApiIp8007(){
      return domain;
}

// export const qiniudomain ='http://media.zhenweitech.cn'
export const qiniudomain ='http://media.boheyayi.com'
