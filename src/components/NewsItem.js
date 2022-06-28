import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div style={{
                    borderRadius:'5px',
                    boxShadow:'0px 6px 20px rgba(0, 0, 0, 0.50)',
                }}
                className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0',
                        "&:hover": {
                            background: "#efefef"
                        },
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <a style={{
                        borderRadius:'5px',
                        boxShadow:'0px 4px 15px rgba(0, 0, 0, 0.50)',
                        overflow:'hidden'
                    }} href={newsUrl}><img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                        <a style={{textDecoration:'none',color:'black'}} href={newsUrl}><h5 className="card-title">{title}</h5></a>
                        <a style={{textDecoration:'none',color:'#232B2B'}} href={newsUrl}><p className="card-text">{description}</p></a>
                        <p className="card-text"><small className="text-muted">By <strong>{!author ? "Unknown" : author}</strong> on <em>{new Date(date).toGMTString()}</em></small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem
