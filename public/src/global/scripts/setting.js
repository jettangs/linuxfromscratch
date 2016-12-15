let urlArr = ['/profile']

//需要登录后访问的URL
export const chkURLToHomeAndSign = (url) => {
    let bool
    urlArr.map(
        (item,index) => {
            console.log(item)
            console.log(url)
            bool = item == url
        }
    )
    return bool
}