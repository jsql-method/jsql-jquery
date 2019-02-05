'use strict';

/**
 * Override @request function
 * @param requestUrl
 * @param requestData
 * @param requestHeaders
 * @returns promise
 */
JSQL.prototype.request = function (requestUrl, requestData, requestHeaders) {

    return jQuery.ajax({
        url: requestUrl,
        headers: requestHeaders,
        method: 'POST',
        dataType: 'json',
        data: JSON.stringify(requestData)
    });

};

/**
 * Overridie @wrap function
 * @param token
 * @param queryType
 * @returns promise
 */
JSQL.prototype.wrap = function (token, queryType) {

    return this.construct(token, queryType, {
        successName: 'done',
        errorName: 'fail'
    });

};
