import React from 'react'

const NewsItems =(props)=> {

                let {title, description, imageUrl, newsUrl, author, date, source} = props
                return (
                        <div className='my-3'>
                             <div className="card">
                                <div style={{display: 'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
                                <span class="badge rounded-pill bg-danger">{source}</span>
                                </div>
                                <img src={!imageUrl?"https://images.hindustantimes.com/img/2021/12/12/1600x900/c6603ff6-2152-11ec-aeba-4b5b44d8440e_1639315582909_1639315599500.jpg":imageUrl} className="card-img-top" alt="..." />
                                <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description}</p>
                                <p className="card-text"><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString().split(' ').slice(0, 5).join(' ')}</small></p>
                                <a href={newsUrl} class="btn btn-dark">Read</a>
                                </div>
                             </div>
                        </div>
                )
}

export default NewsItems
