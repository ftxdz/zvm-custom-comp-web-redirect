interface CountProps {
  globalData: Record<string, any>;
}

export function Count(props: CountProps) {
  console.log(props);
  function getUrlParameter(name: string) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  // Get the value of the 'tab' parameter
  var tabValue = getUrlParameter("path_link");
  location.href = tabValue;
  console.log("true");

  console.log("tab", tabValue);
  return <p>123</p>;
}
