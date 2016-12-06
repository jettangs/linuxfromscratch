import css from 'reactcss' 

export default css({
    'default' : {
        body: {
            paddingTop:'10px',
            userSelect:'none',
            fontSize:'0.85rem'
        },
        row: {
            marginTop: '50px'
        },
        lbl: {
            paddingLeft: '100px'
        },
        ul: {
            float: 'right',
        },
        li: {
            display: 'inline-block',
            margin: '0 5px'
        },
        text: {
            textAlign: 'center',
            width: '180px',
            overflow: 'visible',
            float: 'right',
            marginRight: '80px',
            color: 'grey'
        },
        input: {
            // display: 'none'
        },
        pub: {
            float: 'right',
            marginRight: '80px'
        },
        pubLeft:{
            marginLeft:'20px',
            height: '103px',
            float:'left'
        },
        pubRight:{
            float:'left'
        },
        fstRowPubIt: {
            marginLeft: '10px',
        },
        secRowPubIt: {
            marginTop: '40px',
            marginLeft: '10px',
        },
        link: {
            textAlign: 'center',
            width: '180px',
            overflow: 'visible',
            float: 'right',
            marginRight: '80px',
            cursor: 'pointer',
            color: '#1E90FF'
        }
    }
})
