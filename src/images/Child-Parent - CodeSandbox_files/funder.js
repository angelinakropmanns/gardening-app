(function () {
  let timeout;

  function init(attempts) {
    clearTimeout(timeout)
    attempts = attempts || 1
    if (attempts > 3) return
    if (typeof CodeFundAd === 'undefined') {
      timeout = setTimeout(function () { init(attempts + 1) }, 350)
      return
    }
    new CodeFundAd({"selector":"#codefund_ad","template":"rectangle-narrow","theme":"dark","fallback":false,"urls":{"impression":"https://codefund.app/display/040d30e0-2d75-4b51-b694-1b6a5f49fe64.gif","campaign":"https://codefund.app/impressions/040d30e0-2d75-4b51-b694-1b6a5f49fe64/click?campaign_id=917\u0026creative_id=308\u0026property_id=24\u0026template=rectangle-narrow\u0026theme=dark","poweredBy":"https://codefund.app/invite/3EBQHXsnOfE","adblock":"https://cdn2.codefund.app/assets/px.js","uplift":"https://codefund.app/impressions/040d30e0-2d75-4b51-b694-1b6a5f49fe64/uplift?advertiser_id=613"},"creative":{"name":"MongoDB Atlas v4","headline":"MongoDB Atlas","body":"is the only true global, multi-cloud database service.","cta":"Try now!","imageUrls":{"icon":"https://cdn2.codefund.io/yVLDMBbDFzLsWwRDHdkrwrNN","small":"https://cdn2.codefund.io/Lmzo93bLUZZ7H8LNZoE4QmEH","large":"https://cdn2.codefund.io/nfhKwmD1YnLwGwFiKheijMHo","wide":"https://cdn2.codefund.io/tGRsSAsws8Y1TX2aActNtTPu"}}})
  }

  const codefundStylesheetId = 'codefund-style'
  const codefundScriptId = 'codefund-script'

  if (!document.getElementById(codefundStylesheetId)) {
    const stylesheet = document.createElement('link')
    stylesheet.setAttribute('id', codefundStylesheetId)
    stylesheet.setAttribute('rel', 'stylesheet')
    stylesheet.setAttribute('media', 'all')
    stylesheet.setAttribute('href', 'https://codefund.app/packs/css/code_fund_ad-781ed628.css')
    stylesheet.addEventListener('load', init)
    document.head.appendChild(stylesheet)
  }

  if (document.getElementById(codefundScriptId)) {
    init()
  } else {
    const script = document.createElement('script')
    script.setAttribute('id', codefundScriptId)
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', 'https://codefund.app/packs/js/code_fund_ad-87c05b64e79e03621abc.js')
    script.addEventListener('load', init)
    document.head.appendChild(script)
  }
})()
