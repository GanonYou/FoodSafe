pragma solidity ^0.4.6;

contract FoodSafe
{
    struct Location{
        string Name;
        uint LocationId;
        uint PreviousLocationId;
        uint Timestamp;
        string Secret;
        string PreviousContractAddress;
    }
    
    mapping(uint => Location) Trail;
    uint8 TrailCount=0;

    function AddNewLocation(uint LocationId, string Name, string Secret,string preAddress)
    {
        Location memory newLocation;
        newLocation.Name = Name;
        newLocation.LocationId= LocationId;
        newLocation.Secret= Secret;
        newLocation.Timestamp = now;
        newLocation.PreviousContractAddress = preAddress;
        if(TrailCount!=0)
        {
            newLocation.PreviousLocationId= Trail[TrailCount].LocationId;
        }
        Trail[TrailCount] = newLocation;
        TrailCount++;
    }
    function GetTrailCount() returns(uint8){
        return TrailCount;
    }

    function GetLocation(uint8 TrailNo) returns (string,uint,uint,uint,string,string)
    {
        return (Trail[TrailNo].Name, Trail[TrailNo].LocationId, Trail[TrailNo].PreviousLocationId, Trail[TrailNo].Timestamp,Trail[TrailNo].Secret,Trail[TrailNo].PreviousContractAddress);
    }
}