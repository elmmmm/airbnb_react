// 把原本svg标签中 style属性中的字符串解析成对应的JS对象
function styleStrToObject(styleStr){
    const obj = {}
    const s = styleStr.toLowerCase().replace(/-(.)/g, function(m, g){
        return g.toUpperCase()
    }).replace(/;\s?$/g, "").split(/:|;/g)
    for(var i=0; i < s.length; i+=2){
        obj[s[i].replace(/\s/g, "")] = s[i+1].replace(/^\s+|\s+$/g, "")
    }
    return obj
}

export default styleStrToObject