import React from 'react'

export default function Installed({ installSdk }) {

    const getMeTime = (date) => {
        const mydate = new Date().getFullYear() - new Date(date).getFullYear()
        return `${mydate} years ago`
    }

    const backend = installSdk.filter(item => item.categories[0] === 'Backend')
    const utilities = installSdk.filter(item => item.categories[0] === 'Utilities')
    const payments = installSdk.filter(item => item.categories[0] === 'Payments')
    const appPlatform = installSdk.filter(item => item.categories[0] === 'App Platform')
    const social = installSdk.filter(item => item.categories[0] === 'Social')
    const location = installSdk.filter(item => item.categories[0] === 'Location')
    const ocr = installSdk.filter(item => item.categories[0] === 'OCR')

    return (
        <div className="container">

            {/* Header */}

            <div className="topbar">
                <div className="topbar__left">
                    <h1>Installed SDK's</h1>
                    <p>Latest Update: Jul 16, 2019 </p>
                </div>
                <div className="topbar__right">
                    <h1>{installSdk.length}</h1>
                </div>
            </div>

            <hr className="line" />

            {/* Content */}

            <div className="main">

                <div className="leftBar">

                    {/* App Platform */}
                    <div className="group">
                        <h3 className="category">App Platform</h3>
                        {
                            appPlatform.map((item, i) => (
                                <div className="item"
                                    key={i}>
                                    <p className="name">{item.name}</p>
                                    <p>{getMeTime(item.lastSeenDate)}</p>
                                </div>
                            ))
                        }
                    </div>

                    {/* Backend */}
                    <div className="group">
                        <h3 className="category">Backend</h3>
                        {
                            backend.map((item, i) => (
                                <div className="item"
                                    key={i}>
                                    <p className="name">{item.name}</p>
                                    <p>{getMeTime(item.lastSeenDate)}</p>
                                </div>
                            ))
                        }
                    </div>
                    {/* Location */}
                    <div className="group">
                        <h3 className="category">Location</h3>
                        {
                            location.map((item, i) => (
                                <div className="item"
                                    key={i}>
                                    <p className="name">{item.name}</p>
                                    <p>{getMeTime(item.lastSeenDate)}</p>
                                </div>
                            ))
                        }
                    </div>
                    {/* Ocr */}
                    <div className="group">
                        <h3 className="category">OCR</h3>
                        {
                            ocr.map((item, i) => (
                                <div className="item"
                                    key={i}>
                                    <p className="name">{item.name}</p>
                                    <p>{getMeTime(item.lastSeenDate)}</p>
                                </div>
                            ))
                        }
                    </div>

                </div>

                <div className="rightBar">
                    {/* Payments */}
                    <div className="group">
                        <h3 className="category">Payments</h3>
                        {
                            payments.map((item, i) => (
                                <div className="item"
                                    key={i}>
                                    <p className="name">{item.name}</p>
                                    <p>{getMeTime(item.lastSeenDate)}</p>
                                </div>
                            ))
                        }
                    </div>
                    {/* social */}
                    <div className="group">
                        <h3 className="category">Social</h3>
                        {
                            social.map((item, i) => (
                                <div className="item"
                                    key={i}>
                                    <p className="name">{item.name}</p>
                                    <p>{getMeTime(item.lastSeenDate)}</p>
                                </div>
                            ))
                        }
                    </div>
                    {/* utilities */}
                    <div className="group">
                        <h3 className="category">utilities</h3>
                        {
                            utilities.map((item, i) => (
                                <div className="item"
                                    key={i}>
                                    <p className="name">{item.name}</p>
                                    <p>{getMeTime(item.lastSeenDate)}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
