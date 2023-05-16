// https://jsonplaceholder.typicode.com/users
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var tableBody = document.querySelector('#table tbody');
function createAndRenderRow(_a) {
    var id = _a.id, name = _a.name, username = _a.username, email = _a.email, companyName = _a.company.name;
    tableBody.innerHTML += "<tr>\n                                <td>".concat(id, "</td>\n                                <td>").concat(name, "</td>\n                                <td>").concat(username, "</td>\n                                <td>").concat(email, "</td>\n                                <td>").concat(companyName, "</td>\n                            </tr>");
}
fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (res) { return res.json(); })
    .then(function (users) {
    tableBody.innerHTML = '';
    users.forEach(createAndRenderRow);
});
var allTh = document.querySelectorAll('#table thead th');
allTh.forEach(function (th, idx) {
    var span = document.createElement('span');
    th.append(span);
    th.addEventListener('click', function () {
        allTh.forEach(function (header) {
            var sp = header.querySelector('span');
            if (sp) {
                sp.innerHTML = '';
            }
        });
        var isAsc = span.classList.contains('asc');
        span.textContent = isAsc ? '▲' : '▼';
        span.classList.remove('dsc', 'asc');
        span.classList.add(isAsc ? 'dsc' : 'asc');
        sortTable(isAsc, idx);
    });
});
function sortTable(isAsc, idx) {
    var _a;
    var rows = __spreadArray([], tableBody.querySelectorAll('tr'), true);
    var sortedRows = rows.sort(function (a, b) {
        var aa = a.children[idx].textContent;
        var bb = b.children[idx].textContent;
        if (idx === 0) {
            return isAsc ? +aa - +bb : +bb - +aa;
        }
        else {
            return isAsc ? aa === null || aa === void 0 ? void 0 : aa.localeCompare(bb) : bb === null || bb === void 0 ? void 0 : bb.localeCompare(aa);
        }
    });
    console.log(sortedRows);
    tableBody.innerHTML = '';
    (_a = tableBody).append.apply(_a, sortedRows);
}
