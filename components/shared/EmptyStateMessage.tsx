interface EmptyStateMessageProps {
  message: string;
}

const EmptyStateMessage = ({ message }: EmptyStateMessageProps) => {
  return (
    <div className="w-full py-6 px-4 bg-card shadow-md rounded-lg flex items-center justify-center border border-muted">
      <p className="text-muted-foreground text-center text-lg font-semibold tracking-wide">
        {message}
      </p>
    </div>
  );
};

export default EmptyStateMessage;
