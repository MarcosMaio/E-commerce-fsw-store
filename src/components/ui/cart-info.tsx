interface CartInfoProps {
  text: string;
  price?: number | string;
}

const CartInfo = ({ text, price }: CartInfoProps) => {
  return (
    <div className="flex items-center justify-between text-xs">
      <p>{text}</p>

      {price !== undefined && price !== null ? (
        <p>R$ {price}</p>
      ) : (
        <p>GRÁTIS</p>
      )}
    </div>
  );
};

export default CartInfo;
