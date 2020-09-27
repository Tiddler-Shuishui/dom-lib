//创建节点
const div1 = dom.create('<div>1</div>')
console.log(div1)

//新增儿子
dom.append(test, div1)

//新增弟弟
const div2 = dom.create('<div>2</div>')
dom.after(test, div2)

//新增哥哥
const div3 = dom.create('<div>3</div>')
dom.before(test, div3)

//新增爸爸
const div4 = dom.create('<div id="parent"></div>')
dom.wrap(test, div4)