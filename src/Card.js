// const Card = ({ avatar_url, html_url, name, public_repos, bio, 
//   location, followers, following, login }) => {
//   return `
//     <li>
//       <img src="${avatar_url}" style="height: 70px" />
//       // <a href="${html_url}">
//       //   <h3>${name}</h3>
//       // </a>
//       <a href="${html_url}">
//       <p>@${login}</p>
//       </a>     
//       <p>${location}</p>
//       <p>${bio ? `Bio: ${bio}` : ""}</p>
//       <p>Public Repos: <strong>${public_repos}</strong></p>
//       <p>${followers}</p>
//       <p>${following}</p>
//     </li>
//   `;
// };

// export default Card;

const Card = ({ avatar_url, html_url, name, bio, 
  location, followers, following, login, public_repos }) => {
  return `

<div class="card">
<div class="card-header">
    <img src="${avatar_url}" alt="Profile Image" class="profile-img">
</div>
<div class="card-body">
    <p class="full-name">${name}</p>
    <p class="username">@${login}</p>
    <p class="city">${location}</p>
    <p class="desc">${bio ? `<strong>Bio:</strong> ${bio}` : ""}</p>
    <p class="desc"><strong>Public Repos: </strong>${public_repos}</p>
    <p class="desc">
        <a href="${html_url}" class="social-icon github"><i class="fab fa-github"></i></a>
    </p>
</div>
<div class="card-footer">
    <div class="col vr">
        <p><span class="count">${followers}</span> Followers</p>
    </div>
    <div class="col">
        <p><span class="count">${following}</span> Following</p>
    </div>
</div>
</div>

`;
};

export default Card;
