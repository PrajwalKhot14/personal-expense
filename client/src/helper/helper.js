import _ from 'lodash';

export function getSum(transaction, type){
    let sum = _(transaction)
    .groupBy("type")
    .map((objs, key)=>{
        if(!type) return _.sumBy(objs, 'amount');
        return{
            'type':key,
            'color': objs[0].color,
            'total': _.sumBy(objs, 'amount')
        }
    })
    .value()
    // console.log(sum)
    return sum;
}

export function getLabels(transaction){
    let amountSum = getSum(transaction, 'type');
    let Total = _.sum(getSum(transaction));
    let percent = _(amountSum)
                            .map(objs=>_.assign(objs,{percent: (100*objs.total)/Total}))
                            .value()
    return percent;
}

export function getTotal(transaction){
    let Total = _.sum(getSum(transaction));
    return Total;
}

export function chart_Data(transaction, custom){
    let dataValue = getSum(transaction)
    let bg = _.map(transaction, a=> a.color)
    bg = _.uniq(bg)
    const config = {
        data: {
            datasets: [{
                data: dataValue,
                backgroundColor: bg,
                hoverOffset: 4,
                borderRadius: 30,
                spacing: 10
              }]
        },
        options:{
            cutout: 115
        }
    }
    return custom ?? config;
}

export function getSumByDate(transaction, type){
    // console.log(transaction)
    let sum = _(transaction)
    .groupBy("date")
    .map((objs, key)=>{
        if(!type) return _.sumBy(objs, 'amount');
        return{
            'date':key,
            'total': _.sumBy(objs, 'amount')
        }
    })
    .value()
    // console.log(sum)
    return sum;
}

export function line_Data(transaction){
    // console.log(getSumByDate(transaction, 'date'))
    let dates = _.map(transaction, a=> a.date)
    let dataValue2 = _.map(transaction, a=> a.amount)
    return dates, dataValue2;
    // let dataValue = getSumByDate(transaction, 'date')
}

export function line_Date(transaction){
    // console.log(getSumByDate(transaction, 'date'))
    let dates = _.map(transaction, a=> a.date)

    return dates;
    // let dataValue = getSumByDate(transaction, 'date')
}

export function getSum_date(transaction, type){
    let sum = _(transaction)
    .groupBy("date")
    .map((objs, key)=>{
        if(!type) return _.sumBy(objs, 'amount');
        return{
            'type':key,
            'color': objs[0].color,
            'total': _.sumBy(objs, 'amount')
        }
    })
    .value()
    // console.log(sum)
    return sum;
}

export function line_chart_Data(transaction, custom){
    let dataValue = getSum_date(transaction)
    let bg = _.map(transaction, a=> a.color)
    bg = _.uniq(bg)

    var arr = [];

    for (var key in transaction){
        arr.push(transaction[key]['date'])
    }
    const labels = arr
    const data = {
    labels: labels,
    datasets: [{
        // label: 'My First Dataset',
        data: dataValue,
        borderColor:'green',
        tension:0.4,
        fill:false,
        pointStyle:'rect',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        showLine:true
    }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
        scales: {
            y: {
            beginAtZero: false
            }
        }
        },
    };

    return custom ?? config;
}
