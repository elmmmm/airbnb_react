import fzRequest from ".."
export function getEntireRoomList(offset=0, size=20){
    return fzRequest.get({
        url: "entire/list",
        params: {
            offset,
            size
        }
    })
}