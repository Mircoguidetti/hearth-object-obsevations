const mappingDayToNumber = {
    'mon':1,
    'tue':2,
    'wed':3,
    'thur':4,
    'fri':5,
    'sat':6,
    'sun':7
}
export const getDate = (d) => {
    const dayNumber = mappingDayToNumber[d]
    d = new Date(new Date());
    let day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6:dayNumber); // adjust when day is sunday
    const dd = new Date(d.setDate(diff))
    const month = dd.getMonth()+1
    const year = dd.getFullYear()
    const date = dd.getDate()
    return `${year}-${('0' + month).slice(-2)}-${('0' + date).slice(-2)}`
}

export const getCurrentDate = () => {
    const date = new Date()

    return Object.keys(mappingDayToNumber)[date.getDay()-1]

}

export const getChartBackgroundColors = () => {
    const colors = [
      '#13384C',
      '#123547',
      '#113242',
      '#10303D',
      '#0F2D38',
      '#0E2B33',
      '#0D282E',
      '#0C2529',
      '#0B2324',
      '#0B2324',
    ]
  
    const colorStops = colors.map((color, i) => {
      return [i * (1 / (colors.length - 1)), color.replace(', 1)', ', 0.4)')]
    })
  
    return colorStops
  }
  

  export const getPastSevenDaysDate = () => {
    const dd = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)

    const month = dd.getMonth()+1
    const year = dd.getFullYear()
    const date = dd.getDate()
    return `${year}-${('0' + month).slice(-2)}-${('0' + date).slice(-2)}`

}