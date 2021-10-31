import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Installed from './Components/Installed'
import UnInstalled from './Components/UnInstalled'
import './App.scss'
export default function App() {

  const [installSdk, setInstallSdk] = useState([])
  const [unInstallSdk, setUnInstallSdk] = useState([])
  const [installState, setInstallState] = useState(true)

  // Fetch Install
  const fetchInstallSdk = async () => {
    const res = await axios.get('installed.json')
    const data = await res.data.data
    setInstallSdk(data.installedSdks)
  }
  // Fetch unInstall
  const fetchUnInstallSdk = async () => {
    const res = await axios.get('uninstalled.json')
    const data = await res.data.data
    setUnInstallSdk(data.uninstalledSdks)

  }

  useEffect(() => {
    fetchInstallSdk()
    fetchUnInstallSdk()
  }, [])

  return (
    <div className="app">
      <button
        className={`installedBtn ${installState && 'activeBtn'} `}
        onClick={() => setInstallState(true)}>Install</button>
      <button
        className={`unInstallBtn ${!installState && 'activeBtn'} `}
        onClick={() => setInstallState(false)}>Uninstall</button>
      {
        installState ?
          <Installed installSdk={installSdk} data-testid="installSDK-id" /> :
          <UnInstalled unInstallSdk={unInstallSdk} />
      }
    </div>
  )
}
