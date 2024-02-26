import StarIcon from "../../assets/icons/star-icon";

const Divider = ({ noIcon = false }: { noIcon?: boolean }) => {
  return (
    <div
      role="separator"
      className="mx-auto flex h-6 w-full max-w-xs items-center gap-2 py-10 md:py-20"
    >
      {noIcon ? (
        <div className="h-0.5 flex-1 bg-gray-300 " />
      ) : (
        <>
          <div className="h-0.5 flex-1 bg-gray-300 " />
          <span className="h-8 w-8 stroke-gray-400">
            <StarIcon />
          </span>
          <div className="h-0.5 flex-1 bg-gray-300 " />
        </>
      )}
    </div>
  );
};

export default Divider;
