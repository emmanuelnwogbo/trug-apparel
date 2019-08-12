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
       "./imgs/unsplash15.jpg",
       "./imgs/unsplash2.jpg",
       "./imgs/unsplash3.jpg",
       "./imgs/unsplash4.jpg",
       "./imgs/unsplash11.jpg",
        "./imgs/unsplash13.jpg"
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