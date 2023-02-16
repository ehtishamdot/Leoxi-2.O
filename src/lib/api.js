const FIREBASE_DOMAIN = "https://leoxi-c5242-default-rtdb.firebaseio.com/";
const SQL_DOMAIN = "http://localhost:5000";

export async function getAllUsers() {
  const response = await fetch(`${FIREBASE_DOMAIN}/users.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  const transformedUsers = [];

  for (const key in data) {
    const userObj = {
      id: key,
      ...data[key],
    };

    transformedUsers.push(userObj);
  }

  console.log(transformedUsers);

  return transformedUsers;
}

export async function getSingleUser(userId) {
  // const response = await fetch(`${SQL_DOMAIN}/user/${userId}`);
  const response = await fetch(`${FIREBASE_DOMAIN}/users/${userId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch user.");
  }

  const loadedUser = {
    id: userId,
    ...data,
  };

  return loadedUser;
}

export async function addRequest(requestData, request) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/requests/${requestData.id}/request.json`,
    {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}

export async function coinsChange(requestData, request) {
  const response = await fetch(`${SQL_DOMAIN}/coins/${requestData.id}`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}

export async function addActiveRequest(requestData, request) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/${requestData.userId}/request${requestData.status}/request.json`,
    {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}

export async function addHistory(historyData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/history/${historyData.userId}/${historyData.cartUserId}/request.json`,
    {
      method: "POST",
      body: JSON.stringify(historyData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create history.");
  }

  return null;
}

export async function deleteRequest(requestData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/requests/${requestData.userid}/request${requestData.status}/${requestData.deleteItemId}.json`,
    {
      method: "DELETE",
      body: null,
      headers: {
        "Content-Type": null,
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}
