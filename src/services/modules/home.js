import fzRequest from "../";
export function getHomeGoodPriceData(){
    return fzRequest.get({url: "/home/goodprice"})
}

export function getHomeHighScoreData(){
    return fzRequest.get({url: "/home/highscore"})
}

export function getHomeDiscountData(){
    return fzRequest.get({url: "/home/discount"})
}

export function getHomeHotRecommendData(){
    return fzRequest.get({url: "/home/hotrecommenddest"})
}

export function getHomeLongforData(){
    return fzRequest.get({url: "/home/longfor"})
}

export function getHomePlusData() {
    return fzRequest.get({
      url: "/home/plus"
    })
  }