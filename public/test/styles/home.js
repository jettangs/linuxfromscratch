import css from 'reactcss' 

export default css({
    'default' : {
        body: {
            position: 'absolute',
            width: '100%',
            top: '0px',
            bottom: '0px',
            background: 'white',
            padding: '20px 100px'
        },
        title: {
            margin:'40px auto 20px',
            textAlign: 'center',
            fontSize: '1.3rem',
        },
        content: {
            textAlign: 'center',
            lineHeight: '25px'
        },
        link: {
            cursor: 'pointer',
            color: 'grey'
        }
    },
    'mobile' : {
        body: {
            position: 'absolute',
            width: '100%',
            top: '0px',
            bottom: '0px',
            background: 'red',
            padding: '20px 30px'
        },
    }
})
