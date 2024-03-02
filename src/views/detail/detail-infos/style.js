import { styled } from "styled-components";

export const InfosWrapper = styled.div`
    padding: 0 80px;
    display: flex;
    .left{
        width: 58.333333333333336%;
        .titlePart{
        padding: 30px 0;
        h1{
            font-weight: 600;
            margin-bottom: 0;
            line-height: 1.625rem;
        }
        div{
            font-size: 20px;
            font-weight: 400;
            margin-top: 4px;
        }
        }
        .guestfavoritebanner{
            display: flex;
            gap: 24px;
            justify-content: space-around;
            align-items: center;
            padding: 22px 26px;
            font-size: 20px;
            font-weight: 600;
            border-radius: 12px;
            border: 1px solid #DDDDDD;
            .recommend{
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 24px;
                .icon{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .text{
                        width: 50px;
                        padding: 0 4px 4px;
                        line-height: 1rem;
                    }
                }
            }
            .rate{
                font-size: 27.5px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                line-height: 1.2;
            }
            .line{
                width: 1px;
                height: 40px;
                background-color: #DDDDDD;
            }
            .comment{
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 1.375rem;
                line-height: 1.2;
                .last{
                    font-size: 0.75rem;
                }
            }
        }
        .landlord{
            display: flex;
            gap: 24px;
            align-items: center;
            padding: 22px 0;
            .avatar{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: #DDDDDD;
            }
            .lordInfo{
                .name{
                    font-size: 20px;
                    font-weight: 600;
                }
                .tip{
                    color: rgb(113, 113, 113);
                    font-size: 17px;
                }
            }
            
        }
        .features{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            gap: 24px;
            .item{
                display: flex;
                gap: 24px;
                .summary{
                    font-size: 20px;
                    font-weight: 600;
                }
                .detail{
                    color: rgb(113, 113, 113);
                    font-size: 18px;
                }
            }
        }
        .overview{
            margin-top: 22px;
            >.text{
                color: rgb(34, 34, 34);
                font-size: 20px;
                font-weight: 400;
                padding-top: 30px;
            }
        }
        .facility{
            margin-top: 22px;
            .title{
                font-size: 27.5px;
                font-weight: 600;
                margin-top: 30px;
            }
            .section{
                display: flex;
                flex-wrap: wrap;
                .item{
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    width: 50%;
                    padding-bottom: 16px;
                    font-size: 20px;
                    font-weight: 400;
                }
            }
        }
    }
    .right{
        position: relative;
        width: 33.33333333333333%;
        padding-top: 35px;
        margin-left: 8.333333333333332%;

        .paypanel{
            position: sticky;
            top: 80px;
            background-color: white;
            padding: 24px;
            border: 1px solid rgb(221, 221, 221);
            border-radius: 12px;
            box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
            .book{
                display: flex;
                flex-direction: column;
                gap: 10px;
                .number{
                    border: 1px solid rgb(176, 176, 176);
                    border-radius: 10px;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 1.125rem;
                    .label{
                        font-size: 13px;
                        font-weight: 800;
                    }
                    .date{
                        display: flex;
                        border-bottom: 1px solid rgb(176, 176, 176);
                        .in, .out{
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                            padding: 10px;
                        }
                        .out{
                            border-left: 1px solid rgb(176, 176, 176);
                        }
                    }
                    .guest{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .text{
                            display: flex;
                            flex-direction: column;
                            padding: 10px;
                        }
                        >svg{
                            margin-right: 14px;
                        }
                    }
                }
                .price{
                    font-size: 27.5px;
                    font-weight: 600;
                    >span{
                        font-size: 20px;
                        font-weight: 400;
                        margin-left: 8px;
                    }
                }
                .btn{
                    height: 53px;
                    border-radius: 10px;
                    padding: 14px 24px;
                    margin-top: 5px;
                    font-size: 20px;
                    font-weight: 600;
                    color: white;
                    text-align: center;
                    line-height: 1;
                    background-image: radial-gradient(circle at center, #FF385C 0%, #E61E4D 27.5%, #E31C5F 40%, #D70466 57.5%, #BD1E59 75%, #BD1E59 100%);
                }
            }
            .checklist{
                margin-top: 20px;
                font-size: 20px;
                font-weight: 400;
                color: rgb(34, 34, 34);
                div{
                    display: flex;
                    justify-content: space-between;
                    span:first-child{
                        text-decoration: underline 1px;
                    }
                }
            }
            .total .text{
                display: flex;
                justify-content: space-between;
                font-size: 20px;
                font-weight: 600;
            }
        }
    }
    
`