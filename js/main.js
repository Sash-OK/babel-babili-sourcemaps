$(() => {
    /***
     * Checking Wrong sourcemaps
     */

    console.log('aaa');

    console.log('bbb');

    let showText = text => console.log(text);

    /* HI, I'm breakpoint from line 16 */
    showText('ccc');

    let f = (text) => {
        debugger;
        return showText(text);
    };

    /* Wrong sourcemaps */

    console.log('ddd');

    f('eee');
});