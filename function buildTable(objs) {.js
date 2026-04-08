function buildTable(objs) {
  var table = document.createElement('table')
  var keys = Object.keys(objs[0])
  var tr = document.createElement('tr')
  for (var key of keys) {
    var th = document.createElement('th')
    th.appendChild(document.createTextNode(key))
    tr.appendChild(th)
  }

  table.appendChild(tr)

  for (var obj of objs) {
    var tr = document.createElement('tr')
    for (var key of keys) {
      var val = obj[key]
      var td = document.createElement('td')
      td.appendChild(document.createTextNode(val)) // 数字及文字都能转述成字符串
      if (typeof val === 'number') {
        td.style.textAlign = 'right'
      }
      tr.appendChild(td)
    }
    table.appendChild(tr)
  }

  return table
}
