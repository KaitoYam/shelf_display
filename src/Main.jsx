import XML from './xml.json'

const Main = () =>  {
  return(
    <>
      {(() => {
        const items = [];
          for (let i = 0; i < XML.response.add_update_list.meta_data.length; i++) {
            var Image = "http://images-jp.amazon.com/images/P/" + XML.response.add_update_list.meta_data[i].ASIN + ".09.LZZZZZZZ.jpg";
            items.push(<div class="wrap_list"><li class="list"><img src = {Image} class="Img"/></li></div>)
            // items.push(<li class="list">{ XML.response.add_update_list.meta_data[i].title['#text'] }</li>)
          }
        return  <ul>{ items }</ul>;
    })()}
    </>
  )
}
export default Main;
