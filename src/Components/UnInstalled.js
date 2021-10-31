import React from 'react'

export default function UnInstalled({ unInstallSdk }) {

    const getMeTime = (date) => {
        const mydate = new Date().getFullYear() - new Date(date).getFullYear()
        return `${mydate} years ago`
    }

    const appPerformance = unInstallSdk.filter(item => item.categories[0] === 'App Performance Management')
    const analytics = unInstallSdk.filter(item => item.categories[0] === 'Analytics')
    const utilities = unInstallSdk.filter(item => item.categories[0] === 'Utilities')
    const ui = unInstallSdk.filter(item => item.categories[0] === 'UI')

    return (
        <div className="container">

            {/* Header */}

            <div className="topbar">
                <div className="topbar__left">
                    <h1>Uninstalled SDK's</h1>
                    <p>Latest Update: Jul 16, 2019 </p>
                </div>
                <div className="topbar__right">
                    <h1>{unInstallSdk.length}</h1>
                </div>
            </div>

            <hr className="line" />

            {/* Content */}

            <div className="main">

                <div className="leftBar">

                    {/* App Platform */}
                    <div className="group">
                        <h3 className="category">App Performance</h3>
                        {
                            appPerformance.map((item, i) => (
                                <div className="item"
                                    key={i}>
                                    <p className="name">{item.name}</p>
                                    <p>{getMeTime(item.lastSeenDate)}</p>
                                </div>
                            ))
                        }
                    </div>

                    {/* analytics */}
                    <div className="group">
                        <h3 className="category">Analytics</h3>
                        {
                            analytics.map((item, i) => (
                                <div className="item"
                                    key={i}>
                                    <p className="name">{item.name}</p>
                                    <p>{getMeTime(item.lastSeenDate)}</p>
                                </div>
                            ))
                        }
                    </div>
                    {/* UI */}
                    <div className="group">
                        <h3 className="category">UI</h3>
                        {
                            ui.map((item, i) => (
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

                    {/* utilities */}
                    <div className="group">
                        <h3 className="category">Utilities</h3>
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
