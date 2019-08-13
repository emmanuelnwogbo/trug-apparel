import React, { Component } from 'react';

class Mast extends Component {
   constructor(props) {
     super(props);
     this.state = {
      categories: null,
      currentArticle: 2,
     }
     this.categories = this.categories.bind(this);
   }

   componentDidMount() {
     this.setState({ categories: [
       "https://images.pexels.com/photos/2698918/pexels-photo-2698918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
       "https://images.pexels.com/photos/2479827/pexels-photo-2479827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
       "https://images.pexels.com/photos/2364530/pexels-photo-2364530.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
       "https://images.pexels.com/photos/1820993/pexels-photo-1820993.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
       "https://images.pexels.com/photos/1874866/pexels-photo-1874866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
       "https://images.pexels.com/photos/2097629/pexels-photo-2097629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
     ]}, () => {
      if (this.state.categories !== null) {
        const trimVal = this.state.categories.length-1;
        setInterval(() => {
          if (this.state.currentArticle >= this.state.categories.length-2) {
            this.setState(prevState => {
              return {
                categories: prevState.categories.slice(0, trimVal).concat(prevState.categories)
              }
            })
          }

          this.setState(prevState => {
            return {
              currentArticle: prevState.currentArticle+=1
            }
          })
        }, 2500);
      } 
     });
   }

   categories() {
     if (this.state.categories !== null) {
      let counter = 0;
      return this.state.categories.map(category => {
        counter+=1;
        if (counter < this.state.currentArticle-2) {
          return;
        }

        if (counter === this.state.currentArticle) {
          return (
            <article data-active="true" id={`${counter}`} key={counter} className={'mast__article'}>
              <figure>
                <img src={category}/>
              </figure>
            </article>
          )          
        }

        return (
          <article id={`${counter}`} key={counter} className={'mast__article'}>
            <figure>
              <img src={category}/>
            </figure>
          </article>
        )
      })
     }
   }

   render() {
     return (
       <div className={'mast'}>
        <div className={'mast__slider'}>
          {this.categories()}
        </div>
       </div>
     )
   }
}

export default Mast;