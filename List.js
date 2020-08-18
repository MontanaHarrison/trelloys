import { render } from "@testing-library/react";

function List(header, cards) {
    return (
      <section className='List'>
          <header>
              <div className='List-cards'>

              </div>
          </header>
      </section>
    );
  }
  render(<Card />)

export default List;