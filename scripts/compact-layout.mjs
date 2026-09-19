// Optional layout helpers for the installed Presentations runtime.
// Pure helpers: no filesystem, network, imports, output paths or topic content.
export const compactStyle = Object.freeze({
  width: 1280, height: 720, margin: 28, contentWidth: 1224,
  colors: Object.freeze({
    bg:'#FAFAF7', paper:'#FFFFFF', ink:'#111111', muted:'#575D60',
    red:'#931C25', blue:'#2D438A', gray:'#D9DCD8', light:'#ECEEEB',
    yellow:'#F1E8AA', line:'#797D79',
  }),
});

export function createCompactLayout({fontFamily='PingFang SC'}={}) {
  const C=compactStyle.colors;
  function text(slide,value,x,y,w,h,{size=13,bold=false,color=C.ink,align='left'}={}) {
    const shape=slide.shapes.add({geometry:'textbox',position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});
    shape.text=value;
    shape.text.style={typeface:fontFamily,fontSize:size,bold,color,alignment:align,verticalAlignment:'middle',autoFit:'none',marginLeft:0,marginRight:0,marginTop:0,marginBottom:0};
    return shape;
  }
  function rect(slide,x,y,w,h,{fill=C.light,stroke='none',lineWidth=.7}={}) {
    return slide.shapes.add({geometry:'rect',position:{left:x,top:y,width:w,height:h},fill,line:{fill:stroke,width:stroke==='none'?0:lineWidth}});
  }
  function rule(slide,x,y,w,{color=C.line,lineWidth=.7}={}) {
    return slide.shapes.add({geometry:'line',position:{left:x,top:y,width:w,height:0},fill:'none',line:{fill:color,width:lineWidth}});
  }
  function header(slide,{title,subtitle='',page}) {
    slide.background.fill=C.bg;
    text(slide,title,28,13,1224,36,{size:27,bold:true,color:C.red});
    text(slide,subtitle,30,53,1160,19,{size:12.5});
    if(page!=null)text(slide,String(page).padStart(2,'0'),1216,54,34,17,{size:10,align:'right',color:C.muted});
    rule(slide,28,75,1224,{color:C.ink,lineWidth:1});
  }
  function footer(slide,source) {
    rule(slide,28,687,1224,{color:C.ink,lineWidth:1});
    text(slide,source,30,691,1187,15,{size:8.4,color:C.muted});
  }
  function group(slide,title,x,y,w,h,{color=C.ink}={}) {
    rect(slide,x,y,w,h,{fill:'none',stroke:color,lineWidth:1});
    rect(slide,x+1,y+1,w-2,24,{fill:C.gray});
    text(slide,title,x+7,y+3,w-14,19,{size:15,bold:true,color});
    return {x:x+6,y:y+29,w:w-12,h:h-35};
  }
  function entry(slide,{name,meaning,x,y,w,height=36,highlight=false,indent=0,nameSize=12.6,meaningSize=12,bold=true}) {
    rect(slide,x,y,w,height,{fill:highlight?C.yellow:C.light});
    text(slide,name,x+5+indent,y+1,w-10-indent,16,{size:nameSize,bold});
    text(slide,meaning,x+5+indent,y+17,w-10-indent,height-18,{size:meaningSize});
    return {x,y,w,h:height};
  }
  function table(slide,{values,x,y,widths,heights,size=12.3,center=[],highlight=()=>false}) {
    if(values.length!==heights.length||values.some(r=>r.length!==widths.length))throw new Error('Table dimensions do not match values.');
    const t=slide.tables.add({rows:values.length,columns:widths.length,left:x,top:y,width:widths.reduce((a,b)=>a+b,0),height:heights.reduce((a,b)=>a+b,0),columnWidths:widths,values});
    t.styleOptions={headerRow:false,bandedRows:false};
    t.borders.assign({style:'solid',fill:C.line,width:.55});
    for(let r=0;r<values.length;r++) {
      t.rows[r].height=heights[r];
      for(let c=0;c<widths.length;c++) {
        const cell=t.getCell(r,c);
        cell.fill=r===0?C.gray:highlight(r,c)?C.yellow:c===0?C.light:C.paper;
        cell.text.style={typeface:fontFamily,fontSize:size,bold:r===0||c===0,color:C.ink,alignment:center.includes(c)?'center':'left',verticalAlignment:'middle',autoFit:'none',marginLeft:5,marginRight:5,marginTop:1,marginBottom:1};
      }
    }
    return t;
  }
  return {colors:C,text,rect,rule,header,footer,group,entry,table};
}
