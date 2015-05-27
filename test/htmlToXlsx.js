var should = require("should");
var path = require("path");
var htmlToXlsx = require("../lib/htmlToXlsx")({});

describe('htmlToXlsx', function () {

    beforeEach(function () {
    });

    it("should render valid xlsx", function (done) {
        var res = {content: new Buffer("<table><tr><td>Foo</td></tr>"), headers: {}};

        htmlToXlsx({template: {}}, res, function (err) {

            if (err)
                return done(err);

            res.content.toString().should.containEql("workbook.xml");
            done();
        });
    });
});