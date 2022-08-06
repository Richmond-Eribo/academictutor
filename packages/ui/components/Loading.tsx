const SvgLoader = () => {
  return (
    <>
      <svg viewBox='80 -25 100 100' preserveAspectRatio='true'>
        <circle fill='#fff' stroke='none' cx='6' cy='25' r='20'>
          <animateTransform
            attributeName='transform'
            dur='1s'
            type='translate'
            values='0 15 ; 0 -15; 0 15'
            repeatCount='indefinite'
            begin='0.1'
          />
          <animate
            attributeName='opacity'
            dur='1s'
            values='0;1;0'
            repeatCount='indefinite'
            begin='0.1'
          />
        </circle>
        <circle fill='#fff' stroke='none' cx='70' cy='25' r='20'>
          <animateTransform
            attributeName='transform'
            dur='1s'
            type='translate'
            values='0 10 ; 0 -10; 0 10'
            repeatCount='indefinite'
            begin='0.2'
          />
          <animate
            attributeName='opacity'
            dur='1s'
            values='0;1;0'
            repeatCount='indefinite'
            begin='0.2'
          />
        </circle>
        <circle fill='#fff' stroke='none' cx='134' cy='25' r='20'>
          <animateTransform
            attributeName='transform'
            dur='1s'
            type='translate'
            values='0 5 ; 0 -5; 0 5'
            repeatCount='indefinite'
            begin='0.3'
          />
          <animate
            attributeName='opacity'
            dur='1s'
            values='0;1;0'
            repeatCount='indefinite'
            begin='0.3'
          />
        </circle>
      </svg>

      <style>
        {`
          svg {
            width: 100%;
            height: 12px;
            margin: 10px;
            display: inline-block;
            // background-color: red;
          }
          .cls-3 {
            fill: none;
            stroke: #fff;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 5px;
          }
        `}
      </style>
    </>
  )
}

export default SvgLoader
