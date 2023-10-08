import './AnimalDetails.css';
import React from "react";
function AnimalDetails({ animal }) {
    return (
        <div className="animal-details">
            <div className="image-info">
                <img className="animal-image"
                     src={animal.photos[0]?.medium ? animal.photos[0]?.medium : "https://cdn-icons-png.flaticon.com/512/64/64431.png"}
                     alt={animal.name}/>
                <div className="animal-info">
                    <h2>{animal.name}</h2>
                    <p>{animal.description}</p>
                    <p>Video: {animal.videos[0]?.embed ? <iframe src={animal.videos[0]?.embed} title={animal.name} /> : 'No video available :('}</p>
                </div>
            </div>
            <table>
                <tr>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Size</th>
                </tr>
                <tr>
                    <td>{animal.age}</td>
                    <td>{animal.gender}</td>
                    <td>{animal.size}</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th>Can it stay near children?</th>
                    <th>Can it stay near dogs?</th>
                    <th>Can it stay near cats?</th>
                </tr>
                <tr>
                    <td>{animal.environment.children ? 'Yes' : 'No'}</td>
                    <td>{animal.environment.dogs ? 'Yes' : 'No'}</td>
                    <td>{animal.environment.cats ? 'Yes' : 'No'}</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th>Tags</th>
                </tr>
                <tr>
                    <td>{animal.tags.join(', ')}</td>
                </tr>
            </table>
            <p>Contact:</p>
            <p>-> email: {animal.contact.email}</p>
            <p>-> phone: {animal.contact.phone ? animal.contact.phone : 'Phone unavailable'}</p>
           </div>
    );

}
 export default AnimalDetails;