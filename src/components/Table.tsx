import Thead from "./Thead";
import Tbody from "./Tbody";

export default function Table() {
  return (
    <table className="w-full text-center border border-indigo-500/15 ">
      <caption className="hidden">driving lesson list table</caption>
      <colgroup>
        <col width="20%" />
        <col width="auto" />
        <col width="20%" />
        <col width="20%" />
        <col width="10%" />
        <col width="7%" />
      </colgroup>
      <Thead />
      <Tbody />
    </table>
  );
}
