import { Quote, LoadingQuote } from "../components";
import { useCounter, useFetch } from "../hooks";

export const MultiCustomHook = () => {

  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad</h1>
      <hr />

      {
        isLoading
          ? (
            <LoadingQuote />
          )
          : (
            <Quote quote={quote} author={author} />
          )
      }


      <button className='btn btn-primary'
        disabled={isLoading}
        onClick={() => increment()}
      >
        Next Quote
      </button>

    </>
  )
}
