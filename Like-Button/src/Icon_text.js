function Icon_text({path, text, fill, viewbox}) {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Instagram icon text</title>
            {/* Instagram Like Button */}
            {/* <div style={{margin: 5}}>
                <button style={{ display: "inline-flex", alignItems: "center", padding: "5px 10px", backgroundColor: "#ffffff", border: "none",  fontFamily: "Arial, sans-serif", cursor: "pointer", outline: "none", justifyContent: 'center' }} >
                    <img src={props.icon} style={{width: 24,height: 24,fill: "none",  marginRight: 5}} alt="hart_icon"></img>
                    <p style={{ margin: 0 , color: "#A8A7A7",  fontSize : 14}}>{props.text}</p>
                </button>
            </div> */}

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px'  }}>
            <svg  style={{paddingTop: 5}} width="24" height="24"  fill={fill} stroke="currentColor"  viewBox={viewbox} color='rgb(122, 122, 122)' >
            <path d={path} />
            </svg>
            <span style={{textAlign: "center" , fontSize: "14px", color: "rgb(122, 122, 122)"}}>{text}</span>
            </div>
        </>

    );
}

export default Icon_text ;

