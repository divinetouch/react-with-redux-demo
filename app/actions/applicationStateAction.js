/**
 * This application state can be considered as the global state of the application
 * which contain any properties or state that affect the whole application
 */
export const UPDATE_APPLICATION_STATE = 'UPDATE_APPLICATION_STATE';

export const updateApplicationState = (args) => ({ type: UPDATE_APPLICATION_STATE, args });
