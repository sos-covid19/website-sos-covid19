Handlebars.registerHelper('if_equals', function(conditional, value, options) {
    if (conditional === value){
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper('array_item', function(array, index, options) {
    return options.fn(array[index]);
});

/**
 * @param ary {Array}
 * @param max {Number} The max number of items to display from the array
 * @param [options.skip] {Number=0} Optional. Number of items to skip in the array
 */
Handlebars.registerHelper('each_upto', function(ary, max, options) {
    if(!ary || ary.length == 0)
        return options.inverse(this);

    var result = [],
        skip = (options.hash ? (options.hash.skip ? options.hash.skip : 0) : 0),
        i = skip;

    max += skip;

    for(; i < max && i < ary.length; ++i) {
        result.push(options.fn(ary[i], { data : { itemIndex : i } } ));
    }

    return result.join('');
});