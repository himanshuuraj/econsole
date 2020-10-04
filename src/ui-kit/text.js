import React from 'react';
import { Color } from '../global/util';

export default (props) => {
    let {s, c, b, t, lh, mt, center, style, ...rest} = props
    c = c || Color.black;

    let st = { 
      ...{
        display: 'inline-block',
        color : c,
        fontSize : s,
        lineHeight : lh,
        fontWeight: b ? 'bold' : undefined,
        textAlign : center ? 'center' : undefined,
        marginTop : mt ? mt : undefined,
      }, ...style};


    return (
      <span {...rest} style={st}>
          {t}
      </span>
    );
}