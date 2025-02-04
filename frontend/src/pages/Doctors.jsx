import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const LesMédecins = () => {
  const { speciality } = useParams();

  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);
  const [showFilter, setShowFilter] = useState(false);

  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    // prettier-ignores
    <div>
      <div>
        <p className="text-blue-5">Parcourez les médecins spécialistes</p>

        <div className="flex flex-col items-start gap-5 mt-5 sm:flex-row">
          <button
            onClick={() => setShowFilter((prev) => !prev)}
            className={`py-1 px-3 transition-all sm:hidden rounded-xl bg-blue-1 text-blue-7
              ${showFilter ? " bg-blue-5 text-blue-9" : ""}`}
          >
            Filtres
          </button>
          <div
            className={`${
              showFilter ? "flex" : "hidden sm:flex"
            } flex-col gap-4 text-sm text-blue-5 `}
          >
            <p
              onClick={() =>
                speciality === "Médecin généraliste"
                  ? navigate("/doctors")
                  : navigate("/doctors/Médecin généraliste")
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-blue-8 rounded-full transition-all cursor-pointer ${
                speciality === "Médecin généraliste"
                  ? "bg-blue-6 text-black"
                  : ""
              }`}
            >
              Médecin généraliste
            </p>
            <p
              onClick={() =>
                speciality === "Gynécologue"
                  ? navigate("/doctors")
                  : navigate("/doctors/Gynécologue")
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-blue-8 rounded-full transition-all cursor-pointer ${
                speciality === "Gynécologue" ? "bg-blue-6 text-black" : ""
              }`}
            >
              Gynécologue
            </p>
            <p
              onClick={() =>
                speciality === "Dermatologue"
                  ? navigate("/doctors")
                  : navigate("/doctors/Dermatologue")
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-blue-6 rounded-full transition-all cursor-pointer ${
                speciality === "Dermatologue" ? "bg-blue-6 text-black" : ""
              }`}
            >
              Dermatologue
            </p>
            <p
              onClick={() =>
                speciality === "Pédiatres"
                  ? navigate("/doctors")
                  : navigate("/doctors/Pédiatres")
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-blue-8 rounded-full transition-all cursor-pointer ${
                speciality === "Pédiatres" ? "bg-blue-6 text-black" : ""
              }`}
            >
              Pédiatres
            </p>
            <p
              onClick={() =>
                speciality === "Neurologue"
                  ? navigate("/doctors")
                  : navigate("/doctors/Neurologue")
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-blue-8 rounded-full transition-all cursor-pointer ${
                speciality === "Neurologue" ? "bg-blue-6 text-black" : ""
              }`}
            >
              Neurologue
            </p>
            <p
              onClick={() =>
                speciality === "Gastroentérologue"
                  ? navigate("/doctors")
                  : navigate("/doctors/Gastroentérologue")
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-blue-8 rounded-full transition-all cursor-pointer ${
                speciality === "Gastroentérologue" ? "bg-blue-6 text-black" : ""
              }`}
            >
              Gastroentérologue
            </p>
          </div>
          <div className="grid w-full gap-4 grid-cols-auto gap-y-6">
            {filterDoc.map((item, index) => (
              <div
                onClick={() => navigate(`/appointment/${item._id}`)}
                className="border border-blue-1 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                key={index}
              >
                <img className="bg-blue-1" src={item.image} alt="" />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-center text-blue-5 ">
                    <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                    <p className="text-green-500">Disponible</p>
                  </div>
                  <p className="text-lg font-medium text-blue-6">{item.name}</p>
                  <p className="text-sm text-blue-6">{item.speciality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LesMédecins;
