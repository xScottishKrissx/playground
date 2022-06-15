import React from 'react'
import Loading from '../../../loading';
import './latestStatDisplay.css'

export default function LatestStatsDisplay(props) {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const {data, country, countryVaccine} = props

    const filterCountry = data.filter(x => x.country.toLowerCase() === country.toLowerCase())
    const getCountryObject = filterCountry[0]

    // Don't return anything while user is typing
    if(!getCountryObject) return  <Loading content="latest stats display..."/>;

    const {
        todayCases, 
        cases,
        casesPerOneMillion, 
        todayDeaths, 
        deaths, 
        deathsPerOneMillion, 
        todayRecovered,
        recovered,
        recoveredPerOneMillion,
        tests,
        testsPerOneMillion,
        critical,
        criticalPerOneMillion,
        active,
        population,
    } = getCountryObject

    const getVaccineData = countryVaccine[0].timeline
    let getVaccineTimeline = Object.entries(getVaccineData).map(([date,number]) => ({date, number}))
    const totalVaccines = getVaccineTimeline.reverse()[0].number


    

  return (

    <div className='latestStatsDisplay__container'>

{/* Cases */}
        <div className='latestStatsDisplay__row' id="cases">
            <div className='latestStatsDisplay__column'>
                <span className='latestStatsDisplay__property'>Cases</span>
                <span className='latestStatsDisplay__result'>{numberWithCommas(cases)}</span>
            </div>
            <div className='latestStatsDisplay__column'>
                <span className='latestStatsDisplay__property'>today</span>
                <span className='latestStatsDisplay__result'>{numberWithCommas(todayCases)}</span>
            </div>
            <div className='latestStatsDisplay__column'>
                <span className='latestStatsDisplay__property'>/million</span>
                <span className='latestStatsDisplay__result'>{numberWithCommas(casesPerOneMillion)}</span>
            </div>
        </div>

{/* Deaths */}
        <div className='latestStatsDisplay__row' id="deaths">
            <div className='latestStatsDisplay__column'>
                <span className='latestStatsDisplay__property'>Deaths</span>
                <span className='latestStatsDisplay__result'>{numberWithCommas(deaths)}</span>
            </div>
            <div className='latestStatsDisplay__column'>
                <span className='latestStatsDisplay__property'>today</span>
                <span className='latestStatsDisplay__result'>{numberWithCommas(todayDeaths)}</span>
            </div>
            <div className='latestStatsDisplay__column'>
                <span className='latestStatsDisplay__property'>/million</span>
                <span className='latestStatsDisplay__result'>{numberWithCommas(deathsPerOneMillion)}</span>
            </div>
        </div>

{/* Active + Critical */}
        <div className='latestStatsDisplay__row' id="active">
            <div className='latestStatsDisplay__column'>
                <span className='latestStatsDisplay__property'>Active</span>
                <span className='latestStatsDisplay__result'>{numberWithCommas(active)}</span>
            </div>
            <div className='latestStatsDisplay__column'>
                <span className='latestStatsDisplay__property'>Critical</span>
                <span className='latestStatsDisplay__result'>{numberWithCommas(critical)}</span>
            </div>
            <div className='latestStatsDisplay__column'>
                <span className='latestStatsDisplay__property'>/million</span>
                <span className='latestStatsDisplay__result'>{numberWithCommas(criticalPerOneMillion)}</span>
            </div>
        </div>

{/* Recovered */}
        <div className='latestStatsDisplay__row' id="recovered">
            <div className='latestStatsDisplay__column'>
                <span className='latestStatsDisplay__property'>Recovered</span>
                <span className='latestStatsDisplay__result'>{numberWithCommas(recovered)}</span>
            </div>
            <div className='latestStatsDisplay__column'>
                <span className='latestStatsDisplay__property'>today</span>
                <span className='latestStatsDisplay__result'>{numberWithCommas(todayRecovered)}</span>
            </div>
            <div className='latestStatsDisplay__column'>
                <span className='latestStatsDisplay__property'>/million</span>
                <span className='latestStatsDisplay__result'>{numberWithCommas(recoveredPerOneMillion)}</span>
            </div>
        </div>

{/* Tests + Population */}
        <div className='latestStatsDisplay__row' id="population">
            <div className='latestStatsDisplay__column'>
                <span className='latestStatsDisplay__property'>Population</span>
                <span className='latestStatsDisplay__result'>{numberWithCommas(population)}</span>
            </div>
            <div className='latestStatsDisplay__column'>
                <span className='latestStatsDisplay__property'>Tests</span>
                <span className='latestStatsDisplay__result'>{numberWithCommas(tests)}</span>
            </div>
            <div className='latestStatsDisplay__column'>
                <span className='latestStatsDisplay__property'>/million</span>
                <span className='latestStatsDisplay__result'>{numberWithCommas(testsPerOneMillion)}</span>
            </div>
        </div>

{/* Vaccinations */}
        <div className='latestStatsDisplay__row' id="vaccinations">
            <div className='latestStatsDisplay__column'>
                <span className='latestStatsDisplay__property'>Vaccinations</span>
                <span className='latestStatsDisplay__result'>{numberWithCommas(totalVaccines)}</span>
            </div>
        </div>



    </div>
  )
}
