import PageTitle from "../components/PageTitle/PageTitle";
import PageCard from "../components/Layout/PageCard/PageCard";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  let title = "Error!";
  let message =
    "Sorry, we encountered an unexpected issue. Please try again later or contact our support team for assistance.";

  if (error.status === 500) {
    title += " (500)";
    message = `Oops! Something went wrong on our server. Please try again later or contact our support team for assistance. Error Details: ${error.data.message}`;
  }

  if (error.status === 404) {
    title += " (404)";
    message =
      "Oops! Page Not Found:  We're sorry, but the page you're looking for cannot be found. It may have been removed, had its name changed, or is temporarily unavailable.";
  }

  return (
    <PageCard>
      <PageTitle title={title} />
      <h3>{message}</h3>
    </PageCard>
  );
}
