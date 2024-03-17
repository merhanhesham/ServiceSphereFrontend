import React from 'react'

export default function Talent({talent}) {
  return (
    <div className="item border rounded rounded-5 bg-mainColor p-2 my-3">
    <div className="row align-items-center justify-content-center">
        <div className="col-lg-2">
            <div className="info">
                <img src={require('../../../Images/unknown.webp')} className='w-75 rounded rounded-4' alt='talent'/>
            </div>
        </div>
        <div className="col-lg-1">
            {talent.userName?talent.userName:''}
        </div>
        <div className="col-lg-3">
            <div className="info">
            {talent.bio?talent.bio:''}
            </div>
        </div>
       <div className="col-lg-7">
            <div className="info">
                {talent.services?
                <div className="services">
                    
                </div>
                :''}
            </div>
       </div>
    </div>
</div>
  )
}
