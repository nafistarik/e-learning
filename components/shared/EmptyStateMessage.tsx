interface EmptyStateMessageProps {
  message: string;
}

const EmptyStateMessage = ({ message }: EmptyStateMessageProps) => {
  return (
    <div className="w-full pt-4 pb-6  shadow-md rounded-lg">
      <p className="text-gray-400 text-center text-xl font-bold">{message}</p>
    </div>
  );
};

export default EmptyStateMessage;
