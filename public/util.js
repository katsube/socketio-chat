/**
 * [Wrapper] document.querySelector
 *
 * @param  {string} selector "#foo", ".bar"
 * @return {object}
 */
function $(selector){
  return( document.querySelector(selector) );
}