var toArray = require('stream-to-array');
var extend = require("node.extend");
var conversion;

function recipe(req, res, cb) {
    var options = req.template.phantom || {};
    options.html = res.content;

    conversion(res.content.toString(), function (err, stream) {
        if (err)
            return cb(err);

        res.headers["Content-Type"] = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetf";
        res.headers["Content-Disposition"] = "inline; filename=\"report.xlsx\"";
        res.headers["File-Extension"] = "xlsx";

        toArray(stream, function (err, arr) {
            if (err)
                return cb(err);

            res.content = Buffer.concat(arr);
            cb();
        });
    });
}

module.exports = function (options) {
    options.tmpDir = options.tempDirectory;
    conversion = require("html-to-xlsx")(options);
    return recipe;
};