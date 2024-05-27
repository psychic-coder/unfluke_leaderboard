import React from 'react'
import { FaArrowUp, FaArrowDown  } from "react-icons/fa";
import { HiOutlineArrowTrendingUp  } from "react-icons/hi2";

const App = () => {
  const pink="#E27497";
  return (
    <div className="bg-slate-100">
      <div className="container p-2 mx-auto rounded-md sm:p-4  flex flex-col w-full h-screen justify-center shadow-xl  cursor-pointer ">
	<h2 className="mb-3 font-bold leading-tight text-center text-7xl transition-all duration-300 cursor-pointer hover:scale-125 animate-text bg-gradient-to-r from-[#00224D] via-[#5D0E41] to-[#A0153E] bg-clip-text text-transparent ">LeaderBoards</h2>
	<div className="overflow-x-auto  ">
		<table className="min-w-full text-xs border border-[#FFF1F1] ">
			<thead className="rounded-t-lg ">
				<tr className="text-right border-2 border-[#E27497] bg-[#FDF7F9] shadow-xl p-2 overflow-hidden hover:shadow-2xl">
					<th title="Ranking" className="p-3 text-left border-[#E27497] text-lg font-semibold transition duration-200 hover:scale-110 cursor-pointer">#</th>
					<th title="Team name" className="p-3 text-left font-semibold text-lg transition duration-200 hover:scale-110 cursor-pointer">Team</th>
					<th title="Wins" className="p-3 font-semibold text-lg  transition duration-200 hover:scale-110 cursor-pointer">Win %</th>
					<th title="Losses" className="p-3 font-semibold text-lg  transition duration-200 hover:scale-110 cursor-pointer">Lose %</th>
					<th title="Games behind" className="p-3 font-semibold text-lg  transition duration-200 hover:scale-110 cursor-pointer">Calmar Ratio</th>
					<th title="Home games" className="p-3 font-semibold text-lg  transition duration-200 hover:scale-110 cursor-pointer">Avg. Daily Profit</th>
					<th title="Away games" className="p-3 font-semibold text-lg  transition duration-200 hover:scale-110 cursor-pointer">Away</th>
					<th title="Last 10 games" className="p-3 font-semibold text-lg  transition duration-200 hover:scale-110 cursor-pointer">Price (Rs)</th>
					<th title="Current streak" className="p-3 font-semibold text-lg  transition duration-200 hover:scale-110 cursor-pointer">Action</th>
				</tr>
			</thead>
			<tbody>
				<tr className="text-right border-b border-opacity-40 border-[#E27497]  ">
					<td className="px-3 py-2 text-left">
						<span className="text-lg font-semibold">1</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>MIA</span>
					</td>
					<td className="px-3 py-2 ">
						<span className="w-full flex justify-end items-center"><FaArrowUp className="text-green-500"/>31</span>
					</td>
					<td className="px-3 py-2">
					<span className="w-full flex justify-end items-center"><FaArrowDown className="text-red-500"/>17</span>
					</td>
					<td className="px-3 py-2 text-right">
          <span className="w-full flex justify-end items-center gap-1"><HiOutlineArrowTrendingUp  className="text-black text-xl"/>0</span>
					</td>
					<td className="px-3 py-2">
						<span>17-5</span>
					</td>
					<td className="px-3 py-2">
						<span>14-12</span>
					</td>
					<td className="px-3 py-2">
						<span>8-2</span>
					</td>
					<td className="px-3 py-2">
						<span>W2</span>
					</td>
				</tr>
				<tr className="text-right border-b border-opacity-40 border-[#E27497] bg-slate-50 ">
					<td className="px-3 py-2 text-left">
          <span className="text-lg font-semibold">2</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>CHI</span>
					</td>
          <td className="px-3 py-2 ">
						<span className="w-full flex justify-end items-center"><FaArrowUp className="text-green-500"/>30</span>
					</td>
					<td className="px-3 py-2">
					<span className="w-full flex justify-end items-center"><FaArrowDown className="text-red-500"/>15</span>
					</td>
					
					<td className="px-3 py-2 text-right">
          <span className="w-full flex justify-end items-center gap-1"><HiOutlineArrowTrendingUp  className="text-black text-xl"/>0.5</span>
					</td>
					<td className="px-3 py-2">
						<span>17-6</span>
					</td>
					<td className="px-3 py-2">
						<span>13-11</span>
					</td>
					<td className="px-3 py-2">
						<span>4-6</span>
					</td>
					<td className="px-3 py-2">
						<span>W2</span>
					</td>
				</tr>
				<tr className="text-right border-b border-opacity-40  border-[#E27497]  ">
					<td className="px-3 py-2 text-left">
          <span className="text-lg font-semibold">3</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>CLE</span>
					</td>
					<td className="px-3 py-2 ">
						<span className="w-full flex justify-end items-center"><FaArrowUp className="text-green-500"/>30</span>
					</td>
					<td className="px-3 py-2">
					<span className="w-full flex justify-end items-center"><FaArrowDown className="text-red-500"/>19</span>
					</td>
					<td className="px-3 py-2 text-right">
          <span className="w-full flex justify-end items-center gap-1"><HiOutlineArrowTrendingUp  className="text-black text-xl"/>1.5</span>
					</td>
					<td className="px-3 py-2">
						<span>15-9</span>
					</td>
					<td className="px-3 py-2">
						<span>15-10</span>
					</td>
					<td className="px-3 py-2">
						<span>7-3</span>
					</td>
					<td className="px-3 py-2">
						<span>W3</span>
					</td>
				</tr>
				<tr className="text-right border-b border-opacity-40 border-[#E27497] bg-slate-50 ">
					<td className="px-3 py-2 text-left">
          <span className="text-lg font-semibold">4</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>BKN</span>
					</td>
					<td className="px-3 py-2 ">
						<span className="w-full flex justify-end items-center"><FaArrowUp className="text-green-500"/>29</span>
					</td>
					<td className="px-3 py-2">
					<span className="w-full flex justify-end items-center"><FaArrowDown className="text-red-500"/>19</span>
					</td>
					<td className="px-3 py-2 text-right">
          <span className="w-full flex justify-end items-center gap-1"><HiOutlineArrowTrendingUp  className="text-black text-xl"/>2</span>
					</td>
					<td className="px-3 py-2">
						<span>12-13</span>
					</td>
					<td className="px-3 py-2">
						<span>17-6</span>
					</td>
					<td className="px-3 py-2">
						<span>4-6</span>
					</td>
					<td className="px-3 py-2">
						<span>L3</span>
					</td>
				</tr>
				<tr className="text-right border-b border-opacity-40  border-[#E27497]  ">
					<td className="px-3 py-2 text-left">
          <span className="text-lg font-semibold">5</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>MIL</span>
					</td>
					<td className="px-3 py-2 ">
						<span className="w-full flex justify-end items-center"><FaArrowUp className="text-green-500"/>30</span>
					</td>
					<td className="px-3 py-2">
					<span className="w-full flex justify-end items-center"><FaArrowDown className="text-red-500"/>20</span>
					</td>
					<td className="px-3 py-2 text-right">
          <span className="w-full flex justify-end items-center gap-1"><HiOutlineArrowTrendingUp  className="text-black text-xl"/>2</span>
					</td>
					<td className="px-3 py-2">
						<span>17-8</span>
					</td>
					<td className="px-3 py-2">
						<span>13-12</span>
					</td>
					<td className="px-3 py-2">
						<span>5-5</span>
					</td>
					<td className="px-3 py-2">
						<span>L1</span>
					</td>
				</tr>
				<tr className="text-right border-b border-opacity-40 border-[#E27497] bg-slate-50  ">
					<td className="px-3 py-2 text-left">
          <span className="text-lg font-semibold">6</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>PHI</span>
					</td>
					<td className="px-3 py-2 ">
						<span className="w-full flex justify-end items-center"><FaArrowUp className="text-green-500"/>28</span>
					</td>
					<td className="px-3 py-2">
					<span className="w-full flex justify-end items-center"><FaArrowDown className="text-red-500"/>19</span>
					</td>
					<td className="px-3 py-2 text-right">
          <span className="w-full flex justify-end items-center gap-1"><HiOutlineArrowTrendingUp  className="text-black text-xl"/>2.5</span>
					</td>
					<td className="px-3 py-2">
						<span>11-10</span>
					</td>
					<td className="px-3 py-2">
						<span>17-9</span>
					</td>
					<td className="px-3 py-2">
						<span>7-3</span>
					</td>
					<td className="px-3 py-2">
						<span>W2</span>
					</td>
				</tr>
				<tr className="text-right border-b border-opacity-40  border-[#E27497] ">
					<td className="px-3 py-2 text-left">
          <span className="text-lg font-semibold">7</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>CHA</span>
					</td>
					<td className="px-3 py-2 ">
						<span className="w-full flex justify-end items-center"><FaArrowUp className="text-green-500"/>27</span>
					</td>
					<td className="px-3 py-2">
					<span className="w-full flex justify-end items-center"><FaArrowDown className="text-red-500"/>22</span>
					</td>
					<td className="px-3 py-2 text-right">
          <span className="w-full flex justify-end items-center gap-1"><HiOutlineArrowTrendingUp  className="text-black text-xl"/>4.5</span>
					</td>
					<td className="px-3 py-2">
						<span>13-7</span>
					</td>
					<td className="px-3 py-2">
						<span>14-15</span>
					</td>
					<td className="px-3 py-2">
						<span>7-3</span>
					</td>
					<td className="px-3 py-2">
						<span>W1</span>
					</td>
				</tr>
				<tr className="text-right border-b border-opacity-40 border-[#E27497] bg-slate-50 ">
					<td className="px-3 py-2 text-left">
          <span className="text-lg font-semibold">8</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>BOS</span>
					</td>
					<td className="px-3 py-2 ">
						<span className="w-full flex justify-end items-center"><FaArrowUp className="text-green-500"/>25</span>
					</td>
					<td className="px-3 py-2">
					<span className="w-full flex justify-end items-center"><FaArrowDown className="text-red-500"/>24</span>
					</td>
					<td className="px-3 py-2 text-right">
          <span className="w-full flex justify-end items-center gap-1"><HiOutlineArrowTrendingUp  className="text-black text-xl"/>6.5</span>
					</td>
					<td className="px-3 py-2">
						<span>16-10</span>
					</td>
					<td className="px-3 py-2">
						<span>9-14</span>
					</td>
					<td className="px-3 py-2">
						<span>7-3</span>
					</td>
					<td className="px-3 py-2">
						<span>W2</span>
					</td>
				</tr>
				<tr className="text-right border-b border-opacity-40 border-[#E27497]  ">
					<td className="px-3 py-2 text-left">
					<span className="text-lg font-semibold">9</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>TOW</span>
					</td>
					<td className="px-3 py-2 ">
						<span className="w-full flex justify-end items-center"><FaArrowUp className="text-green-500"/>23</span>
					</td>
					<td className="px-3 py-2">
					<span className="w-full flex justify-end items-center"><FaArrowDown className="text-red-500"/>23</span>
					</td>
					<td className="px-3 py-2 text-right">
					<span className="w-full flex justify-end items-center gap-1"><HiOutlineArrowTrendingUp  className="text-black text-xl"/>7</span>
					</td>
					<td className="px-3 py-2">
						<span>13-12</span>
					</td>
					<td className="px-3 py-2">
						<span>10-11</span>
					</td>
					<td className="px-3 py-2">
						<span>4-6</span>
					</td>
					<td className="px-3 py-2">
						<span>L1</span>
					</td>
				</tr>
				<tr className="text-right border-b border-opacity-40 border-[#E27497] bg-slate-50 ">
					<td className="px-3 py-2 text-left">
          <span className="text-lg font-semibold">10</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>WAS</span>
					</td>
					<td className="px-3 py-2 ">
						<span className="w-full flex justify-end items-center"><FaArrowUp className="text-green-500"/>23</span>
					</td>
					<td className="px-3 py-2">
					<span className="w-full flex justify-end items-center"><FaArrowDown className="text-red-500"/>25</span>
					</td>
					<td className="px-3 py-2 text-right">
          <span className="w-full flex justify-end items-center gap-1"><HiOutlineArrowTrendingUp  className="text-black text-xl"/>8</span>
					</td>
					<td className="px-3 py-2">
						<span>13-12</span>
					</td>
					<td className="px-3 py-2">
						<span>10-12</span>
					</td>
					<td className="px-3 py-2">
						<span>4-6</span>
					</td>
					<td className="px-3 py-2">
						<span>L4</span>
					</td>
				</tr>
				<tr className="text-right border-b border-opacity-40 border-[#E27497]  ">
					<td className="px-3 py-2 text-left">
          <span className="text-lg font-semibold">11</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>NYK</span>
					</td>
					<td className="px-3 py-2 ">
						<span className="w-full flex justify-end items-center"><FaArrowUp className="text-green-500"/>23</span>
					</td>
					<td className="px-3 py-2">
					<span className="w-full flex justify-end items-center"><FaArrowDown className="text-red-500"/>26</span>
					</td>
					<td className="px-3 py-2 text-right">
          <span className="w-full flex justify-end items-center gap-1"><HiOutlineArrowTrendingUp  className="text-black text-xl"/>8.5</span>
					</td>
					<td className="px-3 py-2">
						<span>12-14</span>
					</td>
					<td className="px-3 py-2">
						<span>11-12</span>
					</td>
					<td className="px-3 py-2">
						<span>4-6</span>
					</td>
					<td className="px-3 py-2">
						<span>L2</span>
					</td>
				</tr>
				<tr className="text-right border-b border-opacity-40 border-[#E27497] bg-slate-50  ">
					<td className="px-3 py-2 text-left">
          <span className="text-lg font-semibold">12</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>ATL</span>
					</td>
					<td className="px-3 py-2 ">
						<span className="w-full flex justify-end items-center"><FaArrowUp className="text-green-500"/>22</span>
					</td>
					<td className="px-3 py-2">
					<span className="w-full flex justify-end items-center"><FaArrowDown className="text-red-500"/>25</span>
					</td>
					<td className="px-3 py-2 text-right">
          <span className="w-full flex justify-end items-center gap-1"><HiOutlineArrowTrendingUp  className="text-black text-xl"/>8.5</span>
					</td>
					<td className="px-3 py-2">
						<span>12-11</span>
					</td>
					<td className="px-3 py-2">
						<span>10-14</span>
					</td>
					<td className="px-3 py-2">
						<span>5-5</span>
					</td>
					<td className="px-3 py-2">
						<span>W5</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
</div>


  )
}

export default App